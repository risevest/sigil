import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.636 6.633 12 .269l6.364 6.364a9 9 0 1 1-12.728 0" />
    </svg>
  )
})
Icon.displayName = 'DropFill'
/**
 * Remix Icon: Drop Fill
 * @see {@link https://remixicon.com/icon/drop-fill Remix Icon Docs}
 */
export const DropFill = Icon
