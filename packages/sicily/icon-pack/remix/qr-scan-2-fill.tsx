import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 3h6v6h-6zM9 3v6H3V3zm6 18v-6h6v6zm-6 0H3v-6h6zM3 11h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'QrScan2Fill'
/**
 * Remix Icon: Qr Scan 2 Fill
 * @see {@link https://remixicon.com/icon/qr-scan-2-fill Remix Icon Docs}
 */
export const QrScan2Fill = Icon
