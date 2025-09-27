import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 12.667 5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0z" />
    </svg>
  )
})
Icon.displayName = 'SkipForwardFill'
/**
 * Remix Icon: Skip Forward Fill
 * @see {@link https://remixicon.com/icon/skip-forward-fill Remix Icon Docs}
 */
export const SkipForwardFill = Icon
