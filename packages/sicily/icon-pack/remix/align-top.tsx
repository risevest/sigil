import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18v2H3zm5 8v10H6V11H3l4-4 4 4zm10 0v10h-2V11h-3l4-4 4 4z" />
    </svg>
  )
})
Icon.displayName = 'AlignTop'
/**
 * Remix Icon: Align Top
 * @see {@link https://remixicon.com/icon/align-top Remix Icon Docs}
 */
export const AlignTop = Icon
