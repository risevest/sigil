import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 11V5l-5 8h3v6l5-8zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z" />
    </svg>
  )
})
Icon.displayName = 'BatteryChargeFill'
/**
 * Remix Icon: Battery Charge Fill
 * @see {@link https://remixicon.com/icon/battery-charge-fill Remix Icon Docs}
 */
export const BatteryChargeFill = Icon
