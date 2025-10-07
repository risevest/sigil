import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.333 5.333A3.333 3.333 0 0 1 8.666 2h6.667a3.333 3.333 0 1 1 0 6.667H12v10a3.333 3.333 0 1 1-3.334-3.334 3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1-3.333-3.334M12 12a3.333 3.333 0 1 0 6.666 0A3.333 3.333 0 0 0 12 12" />
    </svg>
  )
})
Icon.displayName = 'FigmaFill'
/**
 * Remix Icon: Figma Fill
 * @see {@link https://remixicon.com/icon/figma-fill Remix Icon Docs}
 */
export const FigmaFill = Icon
