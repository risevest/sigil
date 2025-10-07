import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 10h7l-9 13v-9H4l9-13z" />
    </svg>
  )
})
Icon.displayName = 'FlashlightFill'
/**
 * Remix Icon: Flashlight Fill
 * @see {@link https://remixicon.com/icon/flashlight-fill Remix Icon Docs}
 */
export const FlashlightFill = Icon
