import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.5-14.5L10 10l-2.5 6.5L14 14zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </svg>
  )
})
Icon.displayName = 'Compass3Fill'
/**
 * Remix Icon: Compass 3 Fill
 * @see {@link https://remixicon.com/icon/compass-3-fill Remix Icon Docs}
 */
export const Compass3Fill = Icon
