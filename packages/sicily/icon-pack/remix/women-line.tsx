import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5zM12 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
    </svg>
  )
})
Icon.displayName = 'WomenLine'
/**
 * Remix Icon: Women Line
 * @see {@link https://remixicon.com/icon/women-line Remix Icon Docs}
 */
export const WomenLine = Icon
