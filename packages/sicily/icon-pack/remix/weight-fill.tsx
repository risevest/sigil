import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8z" />
    </svg>
  )
})
Icon.displayName = 'WeightFill'
/**
 * Remix Icon: Weight Fill
 * @see {@link https://remixicon.com/icon/weight-fill Remix Icon Docs}
 */
export const WeightFill = Icon
