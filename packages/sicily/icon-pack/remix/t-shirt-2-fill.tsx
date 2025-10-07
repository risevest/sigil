import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.998 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3 3 0 1 0 6 0z" />
    </svg>
  )
})
Icon.displayName = 'TShirt2Fill'
/**
 * Remix Icon: T Shirt 2 Fill
 * @see {@link https://remixicon.com/icon/t-shirt-2-fill Remix Icon Docs}
 */
export const TShirt2Fill = Icon
