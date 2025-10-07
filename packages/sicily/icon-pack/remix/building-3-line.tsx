import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 10.111V1l11 6v14H3V7zm2-5.742v8.82l-7-3.111V19h14V8.187z" />
    </svg>
  )
})
Icon.displayName = 'Building3Line'
/**
 * Remix Icon: Building 3 Line
 * @see {@link https://remixicon.com/icon/building-3-line Remix Icon Docs}
 */
export const Building3Line = Icon
