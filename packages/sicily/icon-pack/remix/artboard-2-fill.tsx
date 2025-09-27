import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z" />
    </svg>
  )
})
Icon.displayName = 'Artboard2Fill'
/**
 * Remix Icon: Artboard 2 Fill
 * @see {@link https://remixicon.com/icon/artboard-2-fill Remix Icon Docs}
 */
export const Artboard2Fill = Icon
