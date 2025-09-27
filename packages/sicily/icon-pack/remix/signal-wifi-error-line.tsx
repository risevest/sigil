import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.93 15.93 0 0 0 12 5c-3.09 0-5.974.875-8.42 2.392l8.42 10.425L18 10.388v3.183L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m10 16v2h-2v-2zm0-9v7h-2v-7z" />
    </svg>
  )
})
Icon.displayName = 'SignalWifiErrorLine'
/**
 * Remix Icon: Signal Wifi Error Line
 * @see {@link https://remixicon.com/icon/signal-wifi-error-line Remix Icon Docs}
 */
export const SignalWifiErrorLine = Icon
