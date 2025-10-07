import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.998 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm14-16h-10v14h10zm-2 6v2h-2v-2z" />
    </svg>
  )
})
Icon.displayName = 'DoorClosedLine'
/**
 * Remix Icon: Door Closed Line
 * @see {@link https://remixicon.com/icon/door-closed-line Remix Icon Docs}
 */
export const DoorClosedLine = Icon
