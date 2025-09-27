import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.99 3.99 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6c0 1.014-.378 1.94-1 2.646m-2 1.228a4.01 4.01 0 0 1-4-1.228A4 4 0 0 1 12 13a4 4 0 0 1-3-1.354 3.99 3.99 0 0 1-4 1.228V20h14zM14 9a1 1 0 1 1 2 0 2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0 1 1 0 0 1 2 0 2 2 0 1 0 4 0" />
    </svg>
  )
})
Icon.displayName = 'StoreLine'
/**
 * Remix Icon: Store Line
 * @see {@link https://remixicon.com/icon/store-line Remix Icon Docs}
 */
export const StoreLine = Icon
