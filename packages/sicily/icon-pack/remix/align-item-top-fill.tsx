import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3H3v2h18zm-7 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM4 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
    </svg>
  )
})
Icon.displayName = 'AlignItemTopFill'
/**
 * Remix Icon: Align Item Top Fill
 * @see {@link https://remixicon.com/icon/align-item-top-fill Remix Icon Docs}
 */
export const AlignItemTopFill = Icon
