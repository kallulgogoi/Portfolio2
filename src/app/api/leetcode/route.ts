import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
            reputation
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          userContestRanking {
            rating
            globalRanking
            topPercentage
            attendedContestsCount
          }
        }
        recentAcSubmissionList(username: $username, limit: 5) {
          title
          timestamp
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username: "KALLUL" } }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    const user = json?.data?.matchedUser;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const stats = user.submitStatsGlobal?.acSubmissionNum || [];
    const easy = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;
    const total = stats.find((s: any) => s.difficulty === "All")?.count || easy + medium + hard;

    const contestInfo = user.userContestRanking;
    const recentSubs = (json?.data?.recentAcSubmissionList || []).map((s: any) => ({
      title: s.title,
      time: getRelativeTime(Number(s.timestamp) * 1000),
    }));

    return NextResponse.json({
      handle: user.username,
      totalSolved: total,
      easy,
      medium,
      hard,
      contestRating: contestInfo ? Math.round(contestInfo.rating) : null,
      globalRanking: contestInfo?.globalRanking || null,
      topPercentage: contestInfo ? `${contestInfo.topPercentage.toFixed(1)}%` : null,
      contestsAttended: contestInfo?.attendedContestsCount || 0,
      recentSubmissions: recentSubs,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch LeetCode data" }, { status: 500 });
  }
}

function getRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}
