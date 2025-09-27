import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 10v9h-2v-7H6.828l3.95 3.95-1.414 1.414L3 11l6.364-6.364 1.414 1.414L6.828 10z" />
    </svg>
  )
})
Icon.displayName = 'CornerUpLeftLine'
/**
 * Remix Icon: Corner Up Left Line
 * @see {@link https://remixicon.com/icon/corner-up-left-line Remix Icon Docs}
 */
export const CornerUpLeftLine = Icon
