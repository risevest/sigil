import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m18 9-6-6-6 6zm0 6-6 6-6-6z" />
    </svg>
  )
})
Icon.displayName = 'ExpandUpDownFill'
/**
 * Remix Icon: Expand Up Down Fill
 * @see {@link https://remixicon.com/icon/expand-up-down-fill Remix Icon Docs}
 */
export const ExpandUpDownFill = Icon
