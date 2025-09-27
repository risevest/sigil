import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M18.793 7.864c1.162.415.864 2.136-.37 2.136H5.1A1.1 1.1 0 0 1 4 8.9V4.142a1.1 1.1 0 0 1 1.47-1.036zM13.227 8 6 5.42V8zM22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1m-3.577 2c1.234 0 1.532 1.72.37 2.136L5.47 20.894A1.1 1.1 0 0 1 4 19.858V15.1A1.1 1.1 0 0 1 5.1 14zM6 18.581 13.227 16H6z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'FlipHorizontalLine'
/**
 * MingCute Icon: Flip Horizontal Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FlipHorizontalLine = Icon
