import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 12h7l-8 8-8-8h7V4h2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownFill'
/**
 * Remix Icon: Arrow Down Fill
 * @see {@link https://remixicon.com/icon/arrow-down-fill Remix Icon Docs}
 */
export const ArrowDownFill = Icon
