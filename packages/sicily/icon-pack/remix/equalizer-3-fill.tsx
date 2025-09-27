import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 3v3H3v2h4v3h3V3zm5 5h9V6h-9zm5 5v3h4v2h-4v3h-3v-8zm-5 5H3v-2h9z" />
    </svg>
  )
})
Icon.displayName = 'Equalizer3Fill'
/**
 * Remix Icon: Equalizer 3 Fill
 * @see {@link https://remixicon.com/icon/equalizer-3-fill Remix Icon Docs}
 */
export const Equalizer3Fill = Icon
