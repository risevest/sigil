import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 13.41-2.554 2.555a4 4 0 1 1-1.414-1.414l2.554-2.554-6.021-6.021a2 2 0 0 1 0-2.829L12 10.582l7.435-7.435a2 2 0 0 1 0 2.829l-6.02 6.02 2.553 2.554a4 4 0 1 1-1.414 1.414zm-6 6.587a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  )
})
Icon.displayName = 'Scissors2Line'
/**
 * Remix Icon: Scissors 2 Line
 * @see {@link https://remixicon.com/icon/scissors-2-line Remix Icon Docs}
 */
export const Scissors2Line = Icon
