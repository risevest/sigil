import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 3v3H3v2h4v3h2V3zm4 5h10V6H11zm6 5v3h4v2h-4v3h-2v-8zm-4 5H3v-2h10z" />
    </svg>
  )
})
Icon.displayName = 'Equalizer3Line'
/**
 * Remix Icon: Equalizer 3 Line
 * @see {@link https://remixicon.com/icon/equalizer-3-line Remix Icon Docs}
 */
export const Equalizer3Line = Icon
