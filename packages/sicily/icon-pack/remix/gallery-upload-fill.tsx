import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 1v2h8V1h2v2h3.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1zm4 7-4 4h3v4h2v-4h3z" />
    </svg>
  )
})
Icon.displayName = 'GalleryUploadFill'
/**
 * Remix Icon: Gallery Upload Fill
 * @see {@link https://remixicon.com/icon/gallery-upload-fill Remix Icon Docs}
 */
export const GalleryUploadFill = Icon
