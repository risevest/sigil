import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 3h7a6 6 0 0 1 0 12H8v6H6zm2 2v8h5a4 4 0 0 0 0-8z" />
    </svg>
  )
})
Icon.displayName = 'ParkingLine'
/**
 * Remix Icon: Parking Line
 * @see {@link https://remixicon.com/icon/parking-line Remix Icon Docs}
 */
export const ParkingLine = Icon
