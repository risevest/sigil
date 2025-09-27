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
          d="M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M7.864 5.207C8.28 4.045 10 4.343 10 5.577V18.9A1.1 1.1 0 0 1 8.9 20H4.142a1.1 1.1 0 0 1-1.036-1.47zm6.136.37c0-1.234 1.72-1.532 2.136-.37l4.758 13.323A1.1 1.1 0 0 1 19.858 20H15.1a1.1 1.1 0 0 1-1.1-1.1z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'FlipVerticalFill'
/**
 * MingCute Icon: Flip Vertical Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FlipVerticalFill = Icon
