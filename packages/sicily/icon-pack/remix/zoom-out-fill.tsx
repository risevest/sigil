import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M7 10v2h8v-2z" />
    </svg>
  )
})
Icon.displayName = 'ZoomOutFill'
/**
 * Remix Icon: Zoom Out Fill
 * @see {@link https://remixicon.com/icon/zoom-out-fill Remix Icon Docs}
 */
export const ZoomOutFill = Icon
