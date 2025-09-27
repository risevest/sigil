import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m1-8v4h-2v-4H8l4-4 4 4z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpCircleLine'
/**
 * Remix Icon: Arrow Up Circle Line
 * @see {@link https://remixicon.com/icon/arrow-up-circle-line Remix Icon Docs}
 */
export const ArrowUpCircleLine = Icon
