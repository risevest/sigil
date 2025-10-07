import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m10 15.17 9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'CheckLine'
/**
 * Remix Icon: Check Line
 * @see {@link https://remixicon.com/icon/check-line Remix Icon Docs}
 */
export const CheckLine = Icon
