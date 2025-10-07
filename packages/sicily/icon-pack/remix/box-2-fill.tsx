import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.658v8.689l7.5 4.342V12z" />
    </svg>
  )
})
Icon.displayName = 'Box2Fill'
/**
 * Remix Icon: Box 2 Fill
 * @see {@link https://remixicon.com/icon/box-2-fill Remix Icon Docs}
 */
export const Box2Fill = Icon
