import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 .269 6.364 6.364a9 9 0 1 1-12.728 0zm0 2.828-4.95 4.95a7 7 0 0 0 4.954 11.95z" />
    </svg>
  )
})
Icon.displayName = 'ContrastDropFill'
/**
 * Remix Icon: Contrast Drop Fill
 * @see {@link https://remixicon.com/icon/contrast-drop-fill Remix Icon Docs}
 */
export const ContrastDropFill = Icon
