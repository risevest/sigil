import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3.515 3.515 12 12 20.485 20.485 12zm.707-2.122 9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0M13 10V7.5l3.5 3.5-3.5 3.5V12h-3v3H8v-4a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'DirectionLine'
/**
 * Remix Icon: Direction Line
 * @see {@link https://remixicon.com/icon/direction-line Remix Icon Docs}
 */
export const DirectionLine = Icon
