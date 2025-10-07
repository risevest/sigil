import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m0 2c-3.027 0-5.922.842-8.42 2.392l1.904 2.357A12.94 12.94 0 0 1 12.001 8c2.374 0 4.6.637 6.516 1.749L20.42 7.39A15.9 15.9 0 0 0 12 5" />
    </svg>
  )
})
Icon.displayName = 'SignalWifi3Fill'
/**
 * Remix Icon: Signal Wifi 3 Fill
 * @see {@link https://remixicon.com/icon/signal-wifi-3-fill Remix Icon Docs}
 */
export const SignalWifi3Fill = Icon
