import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM8 11v2h3v-2zm0-4v2h3V7zm0 8v2h3v-2zm5 0v2h3v-2zm0-4v2h3v-2zm0-4v2h3V7z" />
    </svg>
  )
})
Icon.displayName = 'Building4Fill'
/**
 * Remix Icon: Building 4 Fill
 * @see {@link https://remixicon.com/icon/building-4-fill Remix Icon Docs}
 */
export const Building4Fill = Icon
