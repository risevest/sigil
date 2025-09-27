import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-12-11.937h2v4h-2zm20 0h2v4h-2z" />
    </svg>
  )
})
Icon.displayName = 'TrophyFill'
/**
 * Remix Icon: Trophy Fill
 * @see {@link https://remixicon.com/icon/trophy-fill Remix Icon Docs}
 */
export const TrophyFill = Icon
