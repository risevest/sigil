import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.502 5.922 12 1 3.498 5.922 12 10.845zM2.5 7.656V17.5l8.5 4.921v-9.844zM13 22.42l8.5-4.921V7.656l-8.5 4.92z" />
    </svg>
  )
})
Icon.displayName = 'Box3Fill'
/**
 * Remix Icon: Box 3 Fill
 * @see {@link https://remixicon.com/icon/box-3-fill Remix Icon Docs}
 */
export const Box3Fill = Icon
