import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" />
    </svg>
  )
})
Icon.displayName = 'PlayListAddLine'
/**
 * Remix Icon: Play List Add Line
 * @see {@link https://remixicon.com/icon/play-list-add-line Remix Icon Docs}
 */
export const PlayListAddLine = Icon
