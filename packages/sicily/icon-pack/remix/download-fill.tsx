import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 19h18v2H3zM13 9h7l-8 8-8-8h7V1h2z" />
    </svg>
  )
})
Icon.displayName = 'DownloadFill'
/**
 * Remix Icon: Download Fill
 * @see {@link https://remixicon.com/icon/download-fill Remix Icon Docs}
 */
export const DownloadFill = Icon
