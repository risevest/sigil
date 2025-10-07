import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 5.885 9.554 12zM3 20h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'FontColor'
/**
 * Remix Icon: Font Color
 * @see {@link https://remixicon.com/icon/font-color Remix Icon Docs}
 */
export const FontColor = Icon
