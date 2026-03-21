import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch Codeforces user info
    const [userInfoRes, ratingRes] = await Promise.all([
      fetch("https://codeforces.com/api/user.info?handles=KALLUL", { next: { revalidate: 3600 } }),
      fetch("https://codeforces.com/api/user.rating?handle=KALLUL", { next: { revalidate: 3600 } }),
    ]);

    const userInfo = await userInfoRes.json();
    const ratingData = await ratingRes.json();

    if (userInfo.status !== "OK" || ratingData.status !== "OK") {
      return NextResponse.json({ error: "Failed to fetch Codeforces data" }, { status: 500 });
    }

    const user = userInfo.result[0];
    const contests = ratingData.result;
    const recentContests = contests.slice(-6).reverse().map((c: any) => ({
      name: c.contestName,
      rank: c.rank,
      ratingChange: c.newRating - c.oldRating,
    }));

    return NextResponse.json({
      handle: user.handle,
      rating: user.rating,
      maxRating: user.maxRating,
      rank: user.rank,
      maxRank: user.maxRank,
      contribution: user.contribution,
      organization: user.organization || "",
      avatar: user.avatar,
      totalContests: contests.length,
      recentContests,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch Codeforces data" }, { status: 500 });
  }
}
