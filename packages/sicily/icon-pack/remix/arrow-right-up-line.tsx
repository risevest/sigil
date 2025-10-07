import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightUpLine'
/**
 * Remix Icon: Arrow Right Up Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-line Remix Icon Docs}
 */
export const ArrowRightUpLine = Icon
