import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.172 11-4.657-4.657 1.414-1.414L21 12l-7.071 7.071-1.414-1.414L17.172 13H8v-2zM4 19V5h2v14z" />
    </svg>
  )
})
Icon.displayName = 'ExpandRightLine'
/**
 * Remix Icon: Expand Right Line
 * @see {@link https://remixicon.com/icon/expand-right-line Remix Icon Docs}
 */
export const ExpandRightLine = Icon
