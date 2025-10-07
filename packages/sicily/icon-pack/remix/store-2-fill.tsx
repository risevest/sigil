import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 20v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.703 4.682c.418.694.642 1.49.642 2.318 0 1.56-.794 2.935-2 3.742V20zM5.789 4 3.356 8.213a2.5 2.5 0 1 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z" />
    </svg>
  )
})
Icon.displayName = 'Store2Fill'
/**
 * Remix Icon: Store 2 Fill
 * @see {@link https://remixicon.com/icon/store-2-fill Remix Icon Docs}
 */
export const Store2Fill = Icon
