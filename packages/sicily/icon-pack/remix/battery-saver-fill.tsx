import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
    </svg>
  )
})
Icon.displayName = 'BatterySaverFill'
/**
 * Remix Icon: Battery Saver Fill
 * @see {@link https://remixicon.com/icon/battery-saver-fill Remix Icon Docs}
 */
export const BatterySaverFill = Icon
