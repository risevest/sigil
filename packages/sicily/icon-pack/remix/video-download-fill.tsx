import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-6 4H8v4H5l4 4 4-4h-3z" />
    </svg>
  )
})
Icon.displayName = 'VideoDownloadFill'
/**
 * Remix Icon: Video Download Fill
 * @see {@link https://remixicon.com/icon/video-download-fill Remix Icon Docs}
 */
export const VideoDownloadFill = Icon
