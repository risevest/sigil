import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 6.74-9.553L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013a6 6 0 0 1 8.242.228" />
    </svg>
  )
})
Icon.displayName = 'Heart2Fill'
/**
 * Remix Icon: Heart 2 Fill
 * @see {@link https://remixicon.com/icon/heart-2-fill Remix Icon Docs}
 */
export const Heart2Fill = Icon
