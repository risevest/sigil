import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6 7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536-1.414 1.414-2.536-2.535A5 5 0 0 1 11 16" />
    </svg>
  )
})
Icon.displayName = 'SeoLine'
/**
 * Remix Icon: Seo Line
 * @see {@link https://remixicon.com/icon/seo-line Remix Icon Docs}
 */
export const SeoLine = Icon
