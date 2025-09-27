import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2zm5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 7h12v4H6z" />
    </svg>
  )
})
Icon.displayName = 'TrainLine'
/**
 * Remix Icon: Train Line
 * @see {@link https://remixicon.com/icon/train-line Remix Icon Docs}
 */
export const TrainLine = Icon
