import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm13 14.764V7.176l-.065.028L9 4.236v12.588l.065-.028z" />
    </svg>
  )
})
Icon.displayName = 'Map2Fill'
/**
 * Remix Icon: Map 2 Fill
 * @see {@link https://remixicon.com/icon/map-2-fill Remix Icon Docs}
 */
export const Map2Fill = Icon
