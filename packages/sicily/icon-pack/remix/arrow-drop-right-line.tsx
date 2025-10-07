import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.172 12 9.343 9.173l1.415-1.414L15 12l-4.242 4.242-1.415-1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropRightLine'
/**
 * Remix Icon: Arrow Drop Right Line
 * @see {@link https://remixicon.com/icon/arrow-drop-right-line Remix Icon Docs}
 */
export const ArrowDropRightLine = Icon
