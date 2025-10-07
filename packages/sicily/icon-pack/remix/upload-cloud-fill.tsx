import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7zM13 13h3l-4-5-4 5h3v4h2z" />
    </svg>
  )
})
Icon.displayName = 'UploadCloudFill'
/**
 * Remix Icon: Upload Cloud Fill
 * @see {@link https://remixicon.com/icon/upload-cloud-fill Remix Icon Docs}
 */
export const UploadCloudFill = Icon
