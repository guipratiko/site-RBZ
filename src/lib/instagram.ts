export type InstagramPost = {
  id: string;
  caption?: string;
  mediaType: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
};

type InstagramMediaApiItem = {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
};

type InstagramMediaApiResponse = {
  data?: InstagramMediaApiItem[];
  error?: { message: string };
};

const INSTAGRAM_LIMIT = 6;
const REVALIDATE_SECONDS = 3600;

function resolveImageUrl(item: InstagramMediaApiItem) {
  if (item.media_type === "VIDEO") {
    return item.thumbnail_url ?? item.media_url;
  }
  return item.media_url ?? item.thumbnail_url;
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  const params = new URLSearchParams({
    fields:
      "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    limit: String(INSTAGRAM_LIMIT),
    access_token: token,
  });

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?${params.toString()}`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );

    if (!response.ok) {
      console.error("Instagram API error:", response.status, await response.text());
      return [];
    }

    const json = (await response.json()) as InstagramMediaApiResponse;

    if (json.error || !json.data) {
      console.error("Instagram API payload error:", json.error?.message);
      return [];
    }

    const posts: InstagramPost[] = [];

    for (const item of json.data) {
      const mediaUrl = resolveImageUrl(item);
      if (!mediaUrl) continue;

      posts.push({
        id: item.id,
        caption: item.caption,
        mediaType: item.media_type,
        mediaUrl,
        permalink: item.permalink,
        timestamp: item.timestamp,
      });
    }

    return posts;
  } catch (error) {
    console.error("Instagram fetch failed:", error);
    return [];
  }
}
