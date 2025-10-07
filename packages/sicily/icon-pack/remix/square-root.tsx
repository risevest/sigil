import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.382 4H22v2h-5.382L9 21.236 5.382 14H2v-2h4.618L9 16.764z" />
    </svg>
  )
})
Icon.displayName = 'SquareRoot'
/**
 * Remix Icon: Square Root
 * @see {@link https://remixicon.com/icon/square-root Remix Icon Docs}
 */
export const SquareRoot = Icon
