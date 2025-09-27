import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  )
})
Icon.displayName = 'ToggleFill'
/**
 * Remix Icon: Toggle Fill
 * @see {@link https://remixicon.com/icon/toggle-fill Remix Icon Docs}
 */
export const ToggleFill = Icon
