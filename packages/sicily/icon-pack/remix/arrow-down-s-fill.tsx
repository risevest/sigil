import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 16-6-6h12z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownSFill'
/**
 * Remix Icon: Arrow Down S Fill
 * @see {@link https://remixicon.com/icon/arrow-down-s-fill Remix Icon Docs}
 */
export const ArrowDownSFill = Icon
