import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 6a3 3 0 1 1 6 0zM7 6H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3A5 5 0 0 0 7 6m2 4a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z" />
    </svg>
  )
})
Icon.displayName = 'ShoppingBag4Fill'
/**
 * Remix Icon: Shopping Bag 4 Fill
 * @see {@link https://remixicon.com/icon/shopping-bag-4-fill Remix Icon Docs}
 */
export const ShoppingBag4Fill = Icon
