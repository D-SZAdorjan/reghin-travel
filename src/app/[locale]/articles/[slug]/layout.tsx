import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export default async function ArticleInnerPageLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <section
      className="-z-20 overflow-hidden"
      style={{
        backgroundImage: 'url("/images/bg-elements2-removebg-preview.png")',
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* <Image className="absolute bottom-0 right-0 m-auto object-cover -z-10" src={bgDesignElement} width={720} height={720} alt="Background Design Element"></Image> */}
      {children}
    </section>
  );
}