import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13.5 12 4.95-4.95 1.414 1.415L17.328 11H23v2h-5.672l2.534 2.533-1.415 1.414zM1 13h5.67l-2.534 2.535 1.414 1.414L10.5 12 5.55 7.05 4.136 8.465 6.672 11H1z" />
    </svg>
  )
})
Icon.displayName = 'CollapseHorizontalLine'
/**
 * Remix Icon: Collapse Horizontal Line
 * @see {@link https://remixicon.com/icon/collapse-horizontal-line Remix Icon Docs}
 */
export const CollapseHorizontalLine = Icon
