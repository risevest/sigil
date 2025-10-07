import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'Speaker2Line'
/**
 * Remix Icon: Speaker 2 Line
 * @see {@link https://remixicon.com/icon/speaker-2-line Remix Icon Docs}
 */
export const Speaker2Line = Icon
