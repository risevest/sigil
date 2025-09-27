import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13.172 12-4.95-4.95 1.414-1.413L16 12l-6.364 6.364-1.414-1.415z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightSLine'
/**
 * Remix Icon: Arrow Right S Line
 * @see {@link https://remixicon.com/icon/arrow-right-s-line Remix Icon Docs}
 */
export const ArrowRightSLine = Icon
