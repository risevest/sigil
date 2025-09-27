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
          d="M5 6a1 1 0 0 1 1-1h4.93a3 3 0 0 1 2.496 1.336L14.536 8H15a3 3 0 0 1 3 3v.21l1.713-1.056A1.5 1.5 0 0 1 22 11.43v5.138a1.5 1.5 0 0 1-2.287 1.277L18 16.79V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h7.132l-.37-.555A1 1 0 0 0 10.93 7H6a1 1 0 0 1-1-1m8.986 4H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-.985zM18 14.441l2 1.232v-3.347l-2 1.232z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'VideoCamera2Line'
/**
 * MingCute Icon: Video Camera 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VideoCamera2Line = Icon
