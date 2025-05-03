import Link from 'next/link';
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface MdxLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string
  children?: ReactNode
}

export function MdxLink({ href, ...props }: MdxLinkProps) {
  return (
    <Link href={href} {...props}>
      {props.children}
    </Link>
  )
}
