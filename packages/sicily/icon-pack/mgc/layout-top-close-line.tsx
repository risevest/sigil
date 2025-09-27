import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 7H5v9h14zm-7.707 2.672a1 1 0 0 1 1.32-.084l.094.084 2.121 2.12a1 1 0 0 1-1.32 1.498l-.094-.083L12 14.793l-1.414 1.414a1 1 0 0 1-1.498-1.32l.084-.094zM19 5H5v3h14z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'LayoutTopCloseLine'
/**
 * MingCute Icon: Layout Top Close Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LayoutTopCloseLine = Icon
