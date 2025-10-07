import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-8.5L16 8l-3.5 9.002L11 13z" />
    </svg>
  )
})
Icon.displayName = 'CompassDiscoverLine'
/**
 * Remix Icon: Compass Discover Line
 * @see {@link https://remixicon.com/icon/compass-discover-line Remix Icon Docs}
 */
export const CompassDiscoverLine = Icon
