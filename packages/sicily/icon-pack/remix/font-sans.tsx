import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 4h12v2h-9v6h8v2h-8v7H7z" />
    </svg>
  )
})
Icon.displayName = 'FontSans'
/**
 * Remix Icon: Font Sans
 * @see {@link https://remixicon.com/icon/font-sans Remix Icon Docs}
 */
export const FontSans = Icon
