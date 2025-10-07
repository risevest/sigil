import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14.997 2 21 8l.001 4.26A5.47 5.47 0 0 0 17.5 11l-.221.004a5.5 5.5 0 0 0-5.127 4.205l-.016.074-.03.02A4.75 4.75 0 0 0 10.878 22L3.993 22a.993.993 0 0 1-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2zM17.5 13a3.5 3.5 0 0 1 3.5 3.5l-.002.103a2.75 2.75 0 0 1-.58 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.393L14 16.5a3.5 3.5 0 0 1 3.5-3.5" />
    </svg>
  )
})
Icon.displayName = 'FileCloudFill'
/**
 * Remix Icon: File Cloud Fill
 * @see {@link https://remixicon.com/icon/file-cloud-fill Remix Icon Docs}
 */
export const FileCloudFill = Icon
