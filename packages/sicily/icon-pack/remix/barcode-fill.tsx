import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 4h2v16H2zm4 0h2v16H6zm3 0h3v16H9zm4 0h2v16h-2zm3 0h2v16h-2zm3 0h3v16h-3z" />
    </svg>
  )
})
Icon.displayName = 'BarcodeFill'
/**
 * Remix Icon: Barcode Fill
 * @see {@link https://remixicon.com/icon/barcode-fill Remix Icon Docs}
 */
export const BarcodeFill = Icon
