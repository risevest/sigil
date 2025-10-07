import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z" />
    </svg>
  )
})
Icon.displayName = 'BriefcaseLine'
/**
 * Remix Icon: Briefcase Line
 * @see {@link https://remixicon.com/icon/briefcase-line Remix Icon Docs}
 */
export const BriefcaseLine = Icon
