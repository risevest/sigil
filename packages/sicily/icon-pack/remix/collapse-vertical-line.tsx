import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 13.5 4.95 4.95-1.415 1.413-2.536-2.535V23h-2v-5.672L8.467 19.86l-1.414-1.414zM11 1v5.67L8.464 4.135 7.05 5.55 12 10.5l4.95-4.95-1.414-1.414L13 6.672V1z" />
    </svg>
  )
})
Icon.displayName = 'CollapseVerticalLine'
/**
 * Remix Icon: Collapse Vertical Line
 * @see {@link https://remixicon.com/icon/collapse-vertical-line Remix Icon Docs}
 */
export const CollapseVerticalLine = Icon
