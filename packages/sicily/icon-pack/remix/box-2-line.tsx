import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.653v.005L12 12v8.689l7.5-4.342V7.653L12 3.311z" />
    </svg>
  )
})
Icon.displayName = 'Box2Line'
/**
 * Remix Icon: Box 2 Line
 * @see {@link https://remixicon.com/icon/box-2-line Remix Icon Docs}
 */
export const Box2Line = Icon
