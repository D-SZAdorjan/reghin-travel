import bgDesignElement from "@/../public/images/bg-elements2-removebg-preview.png";
import { url } from "inspector";
import Image from "next/image";

export default async function ArticleInnerPageLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
 
  return (
    <section className="-z-20 overflow-hidden" style={{backgroundImage:'url("/images/bg-elements2-removebg-preview.png")', backgroundPosition: "center", backgroundRepeat: "repeat"}}>
      {/* <Image className="absolute bottom-0 right-0 m-auto object-cover -z-10" src={bgDesignElement} width={720} height={720} alt="Background Design Element"></Image> */}
        {children}
    </section>
  );
}