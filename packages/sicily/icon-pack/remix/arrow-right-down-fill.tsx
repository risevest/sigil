import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11.637 13.052 5.98 7.395 7.394 5.98l5.657 5.657L18 6.687v11.314H6.687z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightDownFill'
/**
 * Remix Icon: Arrow Right Down Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-fill Remix Icon Docs}
 */
export const ArrowRightDownFill = Icon
