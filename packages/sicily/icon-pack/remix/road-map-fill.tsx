import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.95 11.95a7 7 0 0 0 1.858-6.582l2.495-1.07a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l3.129-1.341a7 7 0 0 0 1.921 6.29L12 16.9zm-1.414-1.414L12 14.07l-3.536-3.535a5 5 0 1 1 7.072 0" />
    </svg>
  )
})
Icon.displayName = 'RoadMapFill'
/**
 * Remix Icon: Road Map Fill
 * @see {@link https://remixicon.com/icon/road-map-fill Remix Icon Docs}
 */
export const RoadMapFill = Icon
