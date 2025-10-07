import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
    </svg>
  )
})
Icon.displayName = 'RectangleFill'
/**
 * Remix Icon: Rectangle Fill
 * @see {@link https://remixicon.com/icon/rectangle-fill Remix Icon Docs}
 */
export const RectangleFill = Icon
