import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  )
})
Icon.displayName = 'TabletFill'
/**
 * Remix Icon: Tablet Fill
 * @see {@link https://remixicon.com/icon/tablet-fill Remix Icon Docs}
 */
export const TabletFill = Icon
