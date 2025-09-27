import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 19h2v-8h-6v8h2v-6h2zM3 19V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2H2v-2zm4-8v2h2v-2zm0 4v2h2v-2zm0-8v2h2V7z" />
    </svg>
  )
})
Icon.displayName = 'HotelFill'
/**
 * Remix Icon: Hotel Fill
 * @see {@link https://remixicon.com/icon/hotel-fill Remix Icon Docs}
 */
export const HotelFill = Icon
