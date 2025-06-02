import Image, { ImageProps } from 'next/image';

interface MdxImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  caption?: string
}

export function MdxImage({ alt, caption, src, ...props }: MdxImageProps) {
  return (
    <figure>
      <Image src={src} className="w-full h-auto rounded-lg" {...props} alt={alt} />
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
