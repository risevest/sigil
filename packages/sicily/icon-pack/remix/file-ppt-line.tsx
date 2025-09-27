import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM5 4v16h14V8h-3v6h-6v2H8V8h7V4zm5 6v2h4v-2z" />
    </svg>
  )
})
Icon.displayName = 'FilePptLine'
/**
 * Remix Icon: File Ppt Line
 * @see {@link https://remixicon.com/icon/file-ppt-line Remix Icon Docs}
 */
export const FilePptLine = Icon
