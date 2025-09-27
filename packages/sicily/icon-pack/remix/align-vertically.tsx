import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4 4 4zM8 18v3H6v-3H3l4-4 4 4zM18 6h3l-4 4-4-4h3V3h2zM8 6h3l-4 4-4-4h3V3h2z" />
    </svg>
  )
})
Icon.displayName = 'AlignVertically'
/**
 * Remix Icon: Align Vertically
 * @see {@link https://remixicon.com/icon/align-vertically Remix Icon Docs}
 */
export const AlignVertically = Icon
