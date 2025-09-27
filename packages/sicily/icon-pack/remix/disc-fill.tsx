import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q.507 0 1 .05z" />
    </svg>
  )
})
Icon.displayName = 'DiscFill'
/**
 * Remix Icon: Disc Fill
 * @see {@link https://remixicon.com/icon/disc-fill Remix Icon Docs}
 */
export const DiscFill = Icon
