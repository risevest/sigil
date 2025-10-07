import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14z" />
    </svg>
  )
})
Icon.displayName = 'CornerDownLeftFill'
/**
 * Remix Icon: Corner Down Left Fill
 * @see {@link https://remixicon.com/icon/corner-down-left-fill Remix Icon Docs}
 */
export const CornerDownLeftFill = Icon
