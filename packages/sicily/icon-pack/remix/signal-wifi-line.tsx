import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m0 2c-3.027 0-5.922.842-8.42 2.392L12 17.817 20.42 7.39A15.9 15.9 0 0 0 12 5" />
    </svg>
  )
})
Icon.displayName = 'SignalWifiLine'
/**
 * Remix Icon: Signal Wifi Line
 * @see {@link https://remixicon.com/icon/signal-wifi-line Remix Icon Docs}
 */
export const SignalWifiLine = Icon
