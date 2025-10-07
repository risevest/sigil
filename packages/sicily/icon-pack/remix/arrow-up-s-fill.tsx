import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 8 6 6H6z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpSFill'
/**
 * Remix Icon: Arrow Up S Fill
 * @see {@link https://remixicon.com/icon/arrow-up-s-fill Remix Icon Docs}
 */
export const ArrowUpSFill = Icon
