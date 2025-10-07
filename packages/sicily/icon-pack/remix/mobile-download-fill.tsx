import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 6c0-1.537.578-2.938 1.528-4H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.083Q18.511 12 18 12a6 6 0 0 1-6-6m0 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M22 6h-3V2h-2v4h-3l4 4z" />
    </svg>
  )
})
Icon.displayName = 'MobileDownloadFill'
/**
 * Remix Icon: Mobile Download Fill
 * @see {@link https://remixicon.com/icon/mobile-download-fill Remix Icon Docs}
 */
export const MobileDownloadFill = Icon
