import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpSLine'
/**
 * Remix Icon: Arrow Up S Line
 * @see {@link https://remixicon.com/icon/arrow-up-s-line Remix Icon Docs}
 */
export const ArrowUpSLine = Icon
