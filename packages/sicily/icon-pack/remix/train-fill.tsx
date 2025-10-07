import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM5 7v4h14V7zm7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  )
})
Icon.displayName = 'TrainFill'
/**
 * Remix Icon: Train Fill
 * @see {@link https://remixicon.com/icon/train-fill Remix Icon Docs}
 */
export const TrainFill = Icon
