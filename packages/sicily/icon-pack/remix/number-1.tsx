import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
    </svg>
  )
})
Icon.displayName = 'Number1'
/**
 * Remix Icon: Number 1
 * @see {@link https://remixicon.com/icon/number-1 Remix Icon Docs}
 */
export const Number1 = Icon
