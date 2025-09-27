import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownLine'
/**
 * Remix Icon: Arrow Down Line
 * @see {@link https://remixicon.com/icon/arrow-down-line Remix Icon Docs}
 */
export const ArrowDownLine = Icon
