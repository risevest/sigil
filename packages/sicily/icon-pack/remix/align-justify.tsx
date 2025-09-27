import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm0 15h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'AlignJustify'
/**
 * Remix Icon: Align Justify
 * @see {@link https://remixicon.com/icon/align-justify Remix Icon Docs}
 */
export const AlignJustify = Icon
