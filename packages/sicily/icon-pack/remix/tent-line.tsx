import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22.103 19 12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5 19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z" />
    </svg>
  )
})
Icon.displayName = 'TentLine'
/**
 * Remix Icon: Tent Line
 * @see {@link https://remixicon.com/icon/tent-line Remix Icon Docs}
 */
export const TentLine = Icon
