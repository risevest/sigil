import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
  )
})
Icon.displayName = 'AddLine'
/**
 * Remix Icon: Add Line
 * @see {@link https://remixicon.com/icon/add-line Remix Icon Docs}
 */
export const AddLine = Icon
