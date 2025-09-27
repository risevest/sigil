import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m5 18 7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5z" />
    </svg>
  )
})
Icon.displayName = 'Functions'
/**
 * Remix Icon: Functions
 * @see {@link https://remixicon.com/icon/functions Remix Icon Docs}
 */
export const Functions = Icon
