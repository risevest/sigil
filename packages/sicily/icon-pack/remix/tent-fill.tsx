import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12.866 3 9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 0 1 1.732 0M12 12.925 8.659 19h6.682z" />
    </svg>
  )
})
Icon.displayName = 'TentFill'
/**
 * Remix Icon: Tent Fill
 * @see {@link https://remixicon.com/icon/tent-fill Remix Icon Docs}
 */
export const TentFill = Icon
