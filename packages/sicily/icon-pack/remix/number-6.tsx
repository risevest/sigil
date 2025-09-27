import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
    </svg>
  )
})
Icon.displayName = 'Number6'
/**
 * Remix Icon: Number 6
 * @see {@link https://remixicon.com/icon/number-6 Remix Icon Docs}
 */
export const Number6 = Icon
