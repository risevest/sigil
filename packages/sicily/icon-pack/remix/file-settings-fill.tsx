import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zM8.595 12.812l-.992.572 1 1.732.992-.573c.393.372.873.654 1.405.812V16.5h2v-1.145a3.5 3.5 0 0 0 1.405-.812l.992.573 1-1.732-.991-.573a3.5 3.5 0 0 0 0-1.623l.991-.572-1-1.732-.992.573A3.5 3.5 0 0 0 13 8.645V7.5h-2v1.145a3.5 3.5 0 0 0-1.405.812l-.992-.573-1 1.732.992.573a3.5 3.5 0 0 0 0 1.623M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'FileSettingsFill'
/**
 * Remix Icon: File Settings Fill
 * @see {@link https://remixicon.com/icon/file-settings-fill Remix Icon Docs}
 */
export const FileSettingsFill = Icon
