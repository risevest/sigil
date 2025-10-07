import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 3h7a6 6 0 0 1 0 12h-3v6H6zm4 4v4h3a2 2 0 1 0 0-4z" />
    </svg>
  )
})
Icon.displayName = 'ParkingFill'
/**
 * Remix Icon: Parking Fill
 * @see {@link https://remixicon.com/icon/parking-fill Remix Icon Docs}
 */
export const ParkingFill = Icon
