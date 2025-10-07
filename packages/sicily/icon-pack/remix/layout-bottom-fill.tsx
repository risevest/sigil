import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 16v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4zM21 3a1 1 0 0 1 1 1v10H2V4a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'LayoutBottomFill'
/**
 * Remix Icon: Layout Bottom Fill
 * @see {@link https://remixicon.com/icon/layout-bottom-fill Remix Icon Docs}
 */
export const LayoutBottomFill = Icon
