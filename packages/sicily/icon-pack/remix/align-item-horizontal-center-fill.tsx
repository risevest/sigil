import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'AlignItemHorizontalCenterFill'
/**
 * Remix Icon: Align Item Horizontal Center Fill
 * @see {@link https://remixicon.com/icon/align-item-horizontal-center-fill Remix Icon Docs}
 */
export const AlignItemHorizontalCenterFill = Icon
