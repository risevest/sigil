import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.788 17.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z" />
    </svg>
  )
})
Icon.displayName = 'SpeedMiniFill'
/**
 * Remix Icon: Speed Mini Fill
 * @see {@link https://remixicon.com/icon/speed-mini-fill Remix Icon Docs}
 */
export const SpeedMiniFill = Icon
