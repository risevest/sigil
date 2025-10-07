import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17.657 15.657 12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z" />
    </svg>
  )
})
Icon.displayName = 'MapPin5Fill'
/**
 * Remix Icon: Map Pin 5 Fill
 * @see {@link https://remixicon.com/icon/map-pin-5-fill Remix Icon Docs}
 */
export const MapPin5Fill = Icon
