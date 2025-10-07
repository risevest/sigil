import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'LayoutTopFill'
/**
 * Remix Icon: Layout Top Fill
 * @see {@link https://remixicon.com/icon/layout-top-fill Remix Icon Docs}
 */
export const LayoutTopFill = Icon
