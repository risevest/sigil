import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
    </svg>
  )
})
Icon.displayName = 'HomeSmile2Fill'
/**
 * Remix Icon: Home Smile 2 Fill
 * @see {@link https://remixicon.com/icon/home-smile-2-fill Remix Icon Docs}
 */
export const HomeSmile2Fill = Icon
