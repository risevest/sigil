import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    </svg>
  )
})
Icon.displayName = 'FlickrFill'
/**
 * Remix Icon: Flickr Fill
 * @see {@link https://remixicon.com/icon/flickr-fill Remix Icon Docs}
 */
export const FlickrFill = Icon
