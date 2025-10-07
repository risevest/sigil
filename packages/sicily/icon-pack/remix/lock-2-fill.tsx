import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-7 7.732V18h2v-2.268A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732M16 8V7a4 4 0 0 0-8 0v1z" />
    </svg>
  )
})
Icon.displayName = 'Lock2Fill'
/**
 * Remix Icon: Lock 2 Fill
 * @see {@link https://remixicon.com/icon/lock-2-fill Remix Icon Docs}
 */
export const Lock2Fill = Icon
