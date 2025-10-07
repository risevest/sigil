import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.394 12 10 7.737v8.526zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832" />
    </svg>
  )
})
Icon.displayName = 'PlayLine'
/**
 * Remix Icon: Play Line
 * @see {@link https://remixicon.com/icon/play-line Remix Icon Docs}
 */
export const PlayLine = Icon
