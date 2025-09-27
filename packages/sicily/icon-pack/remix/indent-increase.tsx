import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-4 3.5L3 16V9z" />
    </svg>
  )
})
Icon.displayName = 'IndentIncrease'
/**
 * Remix Icon: Indent Increase
 * @see {@link https://remixicon.com/icon/indent-increase Remix Icon Docs}
 */
export const IndentIncrease = Icon
