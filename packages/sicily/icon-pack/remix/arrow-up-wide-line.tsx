import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 8.369 8.968 4.747-.936 1.768L12 10.632l-8.032 4.252-.936-1.768z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpWideLine'
/**
 * Remix Icon: Arrow Up Wide Line
 * @see {@link https://remixicon.com/icon/arrow-up-wide-line Remix Icon Docs}
 */
export const ArrowUpWideLine = Icon
