import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2zm5 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z" />
    </svg>
  )
})
Icon.displayName = 'LightbulbFill'
/**
 * Remix Icon: Lightbulb Fill
 * @see {@link https://remixicon.com/icon/lightbulb-fill Remix Icon Docs}
 */
export const LightbulbFill = Icon
