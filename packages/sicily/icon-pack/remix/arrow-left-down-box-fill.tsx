import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 13V7.584l3.5 3.5 3.793-3.793 1.414 1.414-3.793 3.793 3.5 3.5z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftDownBoxFill'
/**
 * Remix Icon: Arrow Left Down Box Fill
 * @see {@link https://remixicon.com/icon/arrow-left-down-box-fill Remix Icon Docs}
 */
export const ArrowLeftDownBoxFill = Icon
