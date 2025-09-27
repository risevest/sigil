import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m4.624 12.416 10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832" />
    </svg>
  )
})
Icon.displayName = 'PlayReverseFill'
/**
 * Remix Icon: Play Reverse Fill
 * @see {@link https://remixicon.com/icon/play-reverse-fill Remix Icon Docs}
 */
export const PlayReverseFill = Icon
