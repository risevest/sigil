import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m22.313 10.175-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707 1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'PushpinFill'
/**
 * Remix Icon: Pushpin Fill
 * @see {@link https://remixicon.com/icon/pushpin-fill Remix Icon Docs}
 */
export const PushpinFill = Icon
