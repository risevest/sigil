import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m8 12 6-6v12z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftSFill'
/**
 * Remix Icon: Arrow Left S Fill
 * @see {@link https://remixicon.com/icon/arrow-left-s-fill Remix Icon Docs}
 */
export const ArrowLeftSFill = Icon
