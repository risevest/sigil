import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526zM8.634 8.17l5 8.66 1.732-1-5-8.66z" />
    </svg>
  )
})
Icon.displayName = 'Settings6Fill'
/**
 * Remix Icon: Settings 6 Fill
 * @see {@link https://remixicon.com/icon/settings-6-fill Remix Icon Docs}
 */
export const Settings6Fill = Icon
