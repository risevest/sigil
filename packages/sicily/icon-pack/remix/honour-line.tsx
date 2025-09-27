import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.722V4H1V2h22v2zM5 4v13.745l7 3.1 7-3.1V4zm3 4h8v2H8zm0 4h8v2H8z" />
    </svg>
  )
})
Icon.displayName = 'HonourLine'
/**
 * Remix Icon: Honour Line
 * @see {@link https://remixicon.com/icon/honour-line Remix Icon Docs}
 */
export const HonourLine = Icon
