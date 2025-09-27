import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 21v-8H6v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1zm-2 0H8v-6h8z" />
    </svg>
  )
})
Icon.displayName = 'SaveFill'
/**
 * Remix Icon: Save Fill
 * @see {@link https://remixicon.com/icon/save-fill Remix Icon Docs}
 */
export const SaveFill = Icon
