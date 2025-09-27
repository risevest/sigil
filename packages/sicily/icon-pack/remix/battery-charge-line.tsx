import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4zm4.375 0 1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM21 9h2v6h-2zm-9 2h3l-5 8v-6H7l5-8z" />
    </svg>
  )
})
Icon.displayName = 'BatteryChargeLine'
/**
 * Remix Icon: Battery Charge Line
 * @see {@link https://remixicon.com/icon/battery-charge-line Remix Icon Docs}
 */
export const BatteryChargeLine = Icon
