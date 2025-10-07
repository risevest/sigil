import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightLine'
/**
 * Remix Icon: Arrow Right Line
 * @see {@link https://remixicon.com/icon/arrow-right-line Remix Icon Docs}
 */
export const ArrowRightLine = Icon
