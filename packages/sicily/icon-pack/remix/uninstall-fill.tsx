import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 14H5v4h14zm-2 1v2h-2v-2zM12 2 8 6h3v5h2V6h3z" />
    </svg>
  )
})
Icon.displayName = 'UninstallFill'
/**
 * Remix Icon: Uninstall Fill
 * @see {@link https://remixicon.com/icon/uninstall-fill Remix Icon Docs}
 */
export const UninstallFill = Icon
