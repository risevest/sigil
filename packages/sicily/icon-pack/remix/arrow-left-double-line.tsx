import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m4.836 12 6.207 6.207 1.414-1.414L7.664 12l4.793-4.793-1.414-1.414zm5.65 0 6.207 6.207 1.414-1.414L13.314 12l4.793-4.793-1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftDoubleLine'
/**
 * Remix Icon: Arrow Left Double Line
 * @see {@link https://remixicon.com/icon/arrow-left-double-line Remix Icon Docs}
 */
export const ArrowLeftDoubleLine = Icon
