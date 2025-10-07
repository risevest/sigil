import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 1 9.5 5.5v11L13 22.421V11.423l-9.502-5.5zM2.5 7.656V17.5l8.5 4.921v-9.844z" />
    </svg>
  )
})
Icon.displayName = 'Box1Fill'
/**
 * Remix Icon: Box 1 Fill
 * @see {@link https://remixicon.com/icon/box-1-fill Remix Icon Docs}
 */
export const Box1Fill = Icon
