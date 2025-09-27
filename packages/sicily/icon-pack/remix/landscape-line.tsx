import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11.27 12.216 15 6l8 15H2L9 8zm1.12 2.022L14.987 19h4.68l-4.77-8.942zM5.348 19h7.304L9 12.219zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
})
Icon.displayName = 'LandscapeLine'
/**
 * Remix Icon: Landscape Line
 * @see {@link https://remixicon.com/icon/landscape-line Remix Icon Docs}
 */
export const LandscapeLine = Icon
