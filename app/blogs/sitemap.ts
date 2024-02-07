import { MetadataRoute } from 'next'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000
  return [1, 2, 3].map((id) => ({
    url: `https://waka.ftisu.vn/blogs/${id}`,
    lastModified: new Date()
  }))
}
