import { useMDXComponent } from 'next-contentlayer2/hooks';
import { MdxLink } from './MdxLink';
import { MdxImage } from './MdxImage';

interface MdxContentProps {
  code: string
}

const mdxComponents = {
  Link: MdxLink,
  Image: MdxImage,
}

export function MdxContent({ code } : MdxContentProps) {
  const Component = useMDXComponent(code)

  return <Component components={{ ...mdxComponents }} />
}
