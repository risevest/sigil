import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10 8-5 7v-5H8l5-7v5z" />
    </svg>
  )
})
Icon.displayName = 'AedFill'
/**
 * Remix Icon: Aed Fill
 * @see {@link https://remixicon.com/icon/aed-fill Remix Icon Docs}
 */
export const AedFill = Icon
