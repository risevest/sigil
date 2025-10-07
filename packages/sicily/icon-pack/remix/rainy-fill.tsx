import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m15.86 18-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96A8.001 8.001 0 1 1 15.98 6.087 6 6 0 1 1 17 18zm-5.628.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0" />
    </svg>
  )
})
Icon.displayName = 'RainyFill'
/**
 * Remix Icon: Rainy Fill
 * @see {@link https://remixicon.com/icon/rainy-fill Remix Icon Docs}
 */
export const RainyFill = Icon
