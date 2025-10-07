import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 18v2h4v-2zM3 7l4-5 4 5v15H3zm18 1h-2v2h2v2h-3v2h3v2h-2v2h2v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
    </svg>
  )
})
Icon.displayName = 'PencilRulerFill'
/**
 * Remix Icon: Pencil Ruler Fill
 * @see {@link https://remixicon.com/icon/pencil-ruler-fill Remix Icon Docs}
 */
export const PencilRulerFill = Icon
