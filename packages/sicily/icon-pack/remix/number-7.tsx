import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 2v1.5L10.763 22H8.574l8.013-18H6V2z" />
    </svg>
  )
})
Icon.displayName = 'Number7'
/**
 * Remix Icon: Number 7
 * @see {@link https://remixicon.com/icon/number-7 Remix Icon Docs}
 */
export const Number7 = Icon
