import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 3h6v18H3v-6h4v-4h4V7h4z" />
    </svg>
  )
})
Icon.displayName = 'StairsFill'
/**
 * Remix Icon: Stairs Fill
 * @see {@link https://remixicon.com/icon/stairs-fill Remix Icon Docs}
 */
export const StairsFill = Icon
