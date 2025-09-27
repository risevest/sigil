import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25z" />
    </svg>
  )
})
Icon.displayName = 'PictureInPicture2Fill'
/**
 * Remix Icon: Picture In Picture 2 Fill
 * @see {@link https://remixicon.com/icon/picture-in-picture-2-fill Remix Icon Docs}
 */
export const PictureInPicture2Fill = Icon
