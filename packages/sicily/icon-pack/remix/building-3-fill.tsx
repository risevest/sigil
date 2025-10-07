import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 10.111V1l11 6v14H3V7z" />
    </svg>
  )
})
Icon.displayName = 'Building3Fill'
/**
 * Remix Icon: Building 3 Fill
 * @see {@link https://remixicon.com/icon/building-3-fill Remix Icon Docs}
 */
export const Building3Fill = Icon
