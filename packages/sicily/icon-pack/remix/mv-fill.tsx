import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zm10 8.178A3 3 0 1 0 14 15V7.999h3V6h-5z" />
    </svg>
  )
})
Icon.displayName = 'MvFill'
/**
 * Remix Icon: Mv Fill
 * @see {@link https://remixicon.com/icon/mv-fill Remix Icon Docs}
 */
export const MvFill = Icon
