import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftLine'
/**
 * Remix Icon: Arrow Left Line
 * @see {@link https://remixicon.com/icon/arrow-left-line Remix Icon Docs}
 */
export const ArrowLeftLine = Icon
