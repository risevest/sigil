import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m11.993 14.407-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556-3.124-3.125a1.5 1.5 0 0 1 0-2.121l.354-.354 4.185 4.185 4.189-4.189.353.354a1.5 1.5 0 0 1 0 2.12l-3.128 3.13 1.561 1.56a4 4 0 1 1-1.414 1.414zM19 13V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  )
})
Icon.displayName = 'ScreenshotFill'
/**
 * Remix Icon: Screenshot Fill
 * @see {@link https://remixicon.com/icon/screenshot-fill Remix Icon Docs}
 */
export const ScreenshotFill = Icon
