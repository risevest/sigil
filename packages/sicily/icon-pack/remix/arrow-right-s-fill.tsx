import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16 12-6 6V6z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightSFill'
/**
 * Remix Icon: Arrow Right S Fill
 * @see {@link https://remixicon.com/icon/arrow-right-s-fill Remix Icon Docs}
 */
export const ArrowRightSFill = Icon
