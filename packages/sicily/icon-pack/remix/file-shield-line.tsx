import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 8V4H5v16h14V9h-3v4.62c0 .844-.446 1.633-1.187 2.102L12 17.498 9.187 15.72C8.446 15.254 8 14.465 8 13.62V8zm7 0v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-11 5.62c0 .15.087.304.255.41L12 15.133l1.745-1.101c.168-.107.255-.261.255-.412V10h-4z" />
    </svg>
  )
})
Icon.displayName = 'FileShieldLine'
/**
 * Remix Icon: File Shield Line
 * @see {@link https://remixicon.com/icon/file-shield-line Remix Icon Docs}
 */
export const FileShieldLine = Icon
