import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-8 3.5L7 9v7z" />
    </svg>
  )
})
Icon.displayName = 'IndentDecrease'
/**
 * Remix Icon: Indent Decrease
 * @see {@link https://remixicon.com/icon/indent-decrease Remix Icon Docs}
 */
export const IndentDecrease = Icon
