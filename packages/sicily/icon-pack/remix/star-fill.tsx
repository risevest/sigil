import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 18.26-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928z" />
    </svg>
  )
})
Icon.displayName = 'StarFill'
/**
 * Remix Icon: Star Fill
 * @see {@link https://remixicon.com/icon/star-fill Remix Icon Docs}
 */
export const StarFill = Icon
