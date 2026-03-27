import { getCollection } from "astro:content";

export async function GET() {
  const packages = await getCollection("packages");
  const body = packages.map((entry) => ({
    slug: entry.slug,
    ...entry.data
  }));

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}
