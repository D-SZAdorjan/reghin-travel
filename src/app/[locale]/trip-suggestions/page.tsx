// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
// TODO: fix mdx content handling
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "path";

export default async function TripSuggestionsPage() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/trip-suggestions"), "utf-8");
  
    const tripSuggestions = await Promise.all(filenames.map(async (filename) => {
        const content = await fs.readFile(
            path.join(process.cwd(), "src/content/trip-suggestions", filename),
            "utf-8"
          );
          const { frontmatter } = await compileMDX<{title: string; lead: string}>({
            source: content,
            options: {
              parseFrontmatter: true
            }
          })
          return {
            slug: filename.replace(".mdx", ""),
            ...frontmatter
          }
    }))

  return (
    <section>
      <h1>Trips</h1>
      <ul>
        {tripSuggestions.map((trip) => (
          <li key={trip.slug}>
            <Link href={`/${trip.slug}`}>
            <h3>{trip.title}</h3>
            <p>{trip.lead}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
