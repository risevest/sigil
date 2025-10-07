import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 4a7.99 7.99 0 0 0-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.98 9.98 0 0 1 12 2c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8m-8 8a8 8 0 0 0 14.357 4.857L16 14.5h6v6l-2.219-2.219A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12z" />
    </svg>
  )
})
Icon.displayName = 'LoopLeftFill'
/**
 * Remix Icon: Loop Left Fill
 * @see {@link https://remixicon.com/icon/loop-left-fill Remix Icon Docs}
 */
export const LoopLeftFill = Icon
