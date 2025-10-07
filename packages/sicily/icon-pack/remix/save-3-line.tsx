import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 11v5h8v-5z" />
    </svg>
  )
})
Icon.displayName = 'Save3Line'
/**
 * Remix Icon: Save 3 Line
 * @see {@link https://remixicon.com/icon/save-3-line Remix Icon Docs}
 */
export const Save3Line = Icon
