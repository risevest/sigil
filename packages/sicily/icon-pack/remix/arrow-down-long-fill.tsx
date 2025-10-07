import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 2h-2v13.586H5.586L12 22l6.414-6.414H13z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownLongFill'
/**
 * Remix Icon: Arrow Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-down-long-fill Remix Icon Docs}
 */
export const ArrowDownLongFill = Icon
