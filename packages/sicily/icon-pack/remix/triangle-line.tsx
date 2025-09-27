import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12.866 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0m-8.66 16h15.588L12 5.5z" />
    </svg>
  )
})
Icon.displayName = 'TriangleLine'
/**
 * Remix Icon: Triangle Line
 * @see {@link https://remixicon.com/icon/triangle-line Remix Icon Docs}
 */
export const TriangleLine = Icon
