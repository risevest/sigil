import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 17h3v2h-3v3h-2v-3H6a1 1 0 0 1-1-1V7H2V5h3V2h2v3h11a1 1 0 0 1 1 1z" />
    </svg>
  )
})
Icon.displayName = 'CropFill'
/**
 * Remix Icon: Crop Fill
 * @see {@link https://remixicon.com/icon/crop-fill Remix Icon Docs}
 */
export const CropFill = Icon
