import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M19 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0zM11.297 7.05a1 1 0 0 0 0 1.415L13.833 11H4a1 1 0 0 0 0 2h9.833l-2.536 2.536a1 1 0 0 0 1.415 1.414l4.242-4.243a1 1 0 0 0 0-1.414L12.712 7.05a1 1 0 0 0-1.415 0"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'ArrowToRightLine'
/**
 * MingCute Icon: Arrow To Right Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowToRightLine = Icon
