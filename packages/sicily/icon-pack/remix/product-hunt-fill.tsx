import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 1 0 0-7" />
    </svg>
  )
})
Icon.displayName = 'ProductHuntFill'
/**
 * Remix Icon: Product Hunt Fill
 * @see {@link https://remixicon.com/icon/product-hunt-fill Remix Icon Docs}
 */
export const ProductHuntFill = Icon
