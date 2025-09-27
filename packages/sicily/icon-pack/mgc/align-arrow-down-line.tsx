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
          d="M16.95 15.297a1 1 0 0 0-1.415 0L13 17.833V9a1 1 0 0 0-2 0v8.833l-2.536-2.536a1 1 0 0 0-1.414 1.415l4.243 4.242a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0 0-1.415M5 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'AlignArrowDownLine'
/**
 * MingCute Icon: Align Arrow Down Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AlignArrowDownLine = Icon
