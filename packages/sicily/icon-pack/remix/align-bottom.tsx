import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 19h18v2H3zm5-6h3l-4 4-4-4h3V3h2zm10 0h3l-4 4-4-4h3V3h2z" />
    </svg>
  )
})
Icon.displayName = 'AlignBottom'
/**
 * Remix Icon: Align Bottom
 * @see {@link https://remixicon.com/icon/align-bottom Remix Icon Docs}
 */
export const AlignBottom = Icon
