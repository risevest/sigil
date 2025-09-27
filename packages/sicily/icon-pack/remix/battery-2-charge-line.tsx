import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 12h3l-5 7v-5H8l5-7zm-2-6H7v14h10V6h-4V4h-2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'Battery2ChargeLine'
/**
 * Remix Icon: Battery 2 Charge Line
 * @see {@link https://remixicon.com/icon/battery-2-charge-line Remix Icon Docs}
 */
export const Battery2ChargeLine = Icon
