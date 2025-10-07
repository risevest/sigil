import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 3h7V.5L18.5 4 15 7.5V5H8v2.5L4.5 4 8 .5zM3 17V6.5h2V17a2 2 0 0 0 2 2h10.5v2H7a4 4 0 0 1-4-4m18-1V9h2.5L20 5.5 16.5 9H19v7h-2.5l3.5 3.5 3.5-3.5z" />
    </svg>
  )
})
Icon.displayName = 'CustomSize'
/**
 * Remix Icon: Custom Size
 * @see {@link https://remixicon.com/icon/custom-size Remix Icon Docs}
 */
export const CustomSize = Icon
