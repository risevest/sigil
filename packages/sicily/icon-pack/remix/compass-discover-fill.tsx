import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 22C7.477 22 3 17.523 3 12S7.477 2 13 2s10 4.477 10 10-4.477 10-10 10M8 11.5l4 1.5 1.5 4.002L17 8z" />
    </svg>
  )
})
Icon.displayName = 'CompassDiscoverFill'
/**
 * Remix Icon: Compass Discover Fill
 * @see {@link https://remixicon.com/icon/compass-discover-fill Remix Icon Docs}
 */
export const CompassDiscoverFill = Icon
