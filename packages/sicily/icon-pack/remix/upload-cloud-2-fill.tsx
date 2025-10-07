import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 12.586 4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978V17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2" />
    </svg>
  )
})
Icon.displayName = 'UploadCloud2Fill'
/**
 * Remix Icon: Upload Cloud 2 Fill
 * @see {@link https://remixicon.com/icon/upload-cloud-2-fill Remix Icon Docs}
 */
export const UploadCloud2Fill = Icon
