import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M15 16h2.405a4 4 0 0 0 3.936-4.716l-.91-5A4 4 0 0 0 16.497 3H8v12l1.821 5.788c.296.69 1.06 1.316 2.024 1.131C13.374 21.625 15 20.433 15 18.5zm-9-1a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'ThumbDown2Fill'
/**
 * MingCute Icon: Thumb Down 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ThumbDown2Fill = Icon
