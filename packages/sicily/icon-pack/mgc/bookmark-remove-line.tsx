import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14.131l4.168-2.778a1.5 1.5 0 0 1 1.664 0l.723.482a1 1 0 0 1-1.11 1.664L12 18.202l-4.668 3.112C6.335 21.978 5 21.264 5 20.066zm10 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'BookmarkRemoveLine'
/**
 * MingCute Icon: Bookmark Remove Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BookmarkRemoveLine = Icon
