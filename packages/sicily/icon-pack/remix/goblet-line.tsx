import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2zM7.49 7h9.02l1.8-2H5.69zm1.8 2L12 12.01 14.71 9z" />
    </svg>
  )
})
Icon.displayName = 'GobletLine'
/**
 * Remix Icon: Goblet Line
 * @see {@link https://remixicon.com/icon/goblet-line Remix Icon Docs}
 */
export const GobletLine = Icon
