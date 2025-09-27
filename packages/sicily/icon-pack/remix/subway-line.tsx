import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM13 5v6h6V7a2 2 0 0 0-2-2zm-2 0H7a2 2 0 0 0-2 2v4h6zm8 8H5v5h14zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'SubwayLine'
/**
 * Remix Icon: Subway Line
 * @see {@link https://remixicon.com/icon/subway-line Remix Icon Docs}
 */
export const SubwayLine = Icon
