import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 4h13v2H8v6h10v2H8v7H6z" />
    </svg>
  )
})
Icon.displayName = 'FontMono'
/**
 * Remix Icon: Font Mono
 * @see {@link https://remixicon.com/icon/font-mono Remix Icon Docs}
 */
export const FontMono = Icon
