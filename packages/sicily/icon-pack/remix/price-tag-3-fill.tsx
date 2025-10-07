import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m10.904 2.1 9.9 1.414 1.414 9.9-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm2.829 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829" />
    </svg>
  )
})
Icon.displayName = 'PriceTag3Fill'
/**
 * Remix Icon: Price Tag 3 Fill
 * @see {@link https://remixicon.com/icon/price-tag-3-fill Remix Icon Docs}
 */
export const PriceTag3Fill = Icon
