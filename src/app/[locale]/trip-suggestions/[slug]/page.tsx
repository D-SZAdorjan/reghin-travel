// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
// TODO: fix mdx content handling
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export default async function TripSuggestionsInnerPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), "src/content/trip-suggestions", `test-en.mdx`),
    "utf-8"
  );
  const data = await compileMDX<{title: string}>({
    source: content,
    options: {
      parseFrontmatter: true
    }
  })
  return (
    <section>
      <h2>{data.frontmatter.title}</h2>
      {data.content}
    </section>
  );
}
