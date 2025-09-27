import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17 9.2 5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159 4 2.8V8.84l-4 2.8zM3 6v12h12V6z" />
    </svg>
  )
})
Icon.displayName = 'VideoOnLine'
/**
 * Remix Icon: Video On Line
 * @see {@link https://remixicon.com/icon/video-on-line Remix Icon Docs}
 */
export const VideoOnLine = Icon
