import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m11.828 12 2.829 2.829-1.414 1.414L9 12.001l4.243-4.243 1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDropLeftLine'
/**
 * Remix Icon: Arrow Drop Left Line
 * @see {@link https://remixicon.com/icon/arrow-drop-left-line Remix Icon Docs}
 */
export const ArrowDropLeftLine = Icon
