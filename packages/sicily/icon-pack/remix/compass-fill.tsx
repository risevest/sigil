import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.5-13.5-5 2-2 5 5-2z" />
    </svg>
  )
})
Icon.displayName = 'CompassFill'
/**
 * Remix Icon: Compass Fill
 * @see {@link https://remixicon.com/icon/compass-fill Remix Icon Docs}
 */
export const CompassFill = Icon
