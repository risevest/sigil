import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H6v16h12zm-6 3a5 5 0 0 1 2.628 9.254L12.5 12H15a3 3 0 1 0-3 3l.955 1.909q-.464.09-.955.091a5 5 0 0 1 0-10" />
    </svg>
  )
})
Icon.displayName = 'DeviceRecoverLine'
/**
 * Remix Icon: Device Recover Line
 * @see {@link https://remixicon.com/icon/device-recover-line Remix Icon Docs}
 */
export const DeviceRecoverLine = Icon
