import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 25 24" width="1em" height="1em" {...props}>
      <path d="M15.511 7.3q.578.25 1.152.506-.043.113-.091.221a7 7 0 0 0-5.102 2.945 5 5 0 1 1 4.217-8.35C14.705 3.053 14 3.897 14 5c0 .994.601 1.904 1.511 2.3m-2.357 10.646a7 7 0 0 0 0-5.89 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.947 5 5 0 1 1-5.1-2.946m10.602-4.313-.565-.246a.506.506 0 0 1 0-.934l.565-.246a4.36 4.36 0 0 0 2.251-2.22l.338-.759a.53.53 0 0 1 .963 0l.32.717a4.37 4.37 0 0 0 2.326 2.251l.61.253a.506.506 0 0 1 0 .942l-.61.253a4.37 4.37 0 0 0-2.327 2.25l-.319.718a.53.53 0 0 1-.963 0l-.338-.76a4.36 4.36 0 0 0-2.25-2.219" />
    </svg>
  )
})
Icon.displayName = 'ColorFilterAiFill'
/**
 * Remix Icon: Color Filter Ai Fill
 * @see {@link https://remixicon.com/icon/color-filter-ai-fill Remix Icon Docs}
 */
export const ColorFilterAiFill = Icon
