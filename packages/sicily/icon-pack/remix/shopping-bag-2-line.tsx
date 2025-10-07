import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4h-14v16zm-10-14v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-10 0V6z" />
    </svg>
  )
})
Icon.displayName = 'ShoppingBag2Line'
/**
 * Remix Icon: Shopping Bag 2 Line
 * @see {@link https://remixicon.com/icon/shopping-bag-2-line Remix Icon Docs}
 */
export const ShoppingBag2Line = Icon
