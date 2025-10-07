import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 11H5v2h14z" />
    </svg>
  )
})
Icon.displayName = 'SubtractFill'
/**
 * Remix Icon: Subtract Fill
 * @see {@link https://remixicon.com/icon/subtract-fill Remix Icon Docs}
 */
export const SubtractFill = Icon
