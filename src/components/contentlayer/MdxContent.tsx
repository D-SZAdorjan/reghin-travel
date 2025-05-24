import { useMDXComponent } from 'next-contentlayer2/hooks';
import { MdxLink } from './MdxLink';
import { MdxImage } from './MdxImage';
import GridRow from "@/components/general/GridRow";
import InfoIconAddress from "@/components/general/InfoIconAddress";
import InfoIconOpenHours from "@/components/general/InfoIconOpenHours";
import InfoIconPhone from "@/components/general/InfoIconPhone";
import ContentBlockQuote from "@/components/innerPage/ContentBlockQuote";
import ContentLabeledImage from "@/components/innerPage/ContentLabeledImage";
import ContentList from "@/components/innerPage/ContentList";
import ContentTextBlock from "@/components/innerPage/ContentTextBlock";
import ContentTitle from "@/components/innerPage/ContentTitle";

interface MdxContentProps {
  code: string
}

const mdxComponents = {
  Link: MdxLink,
  Image: MdxImage,
  GridRow: GridRow,
  ContentTitle: ContentTitle,
  ContentTextBlock: ContentTextBlock,
  ContentList: ContentList,
  ContentBlockQuote: ContentBlockQuote,
  ContentLabeledImage: ContentLabeledImage,
  InfoIconOpenHours: InfoIconOpenHours,
  InfoIconAddress: InfoIconAddress,
  InfoIconPhone: InfoIconPhone
}

export function MdxContent({ code } : MdxContentProps) {
  const Component = useMDXComponent(code)

  return <Component components={{ ...mdxComponents }} />
}
