import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 14V5h2v7h7.586V6.586L21 13l-6.414 6.414V14z" />
    </svg>
  )
})
Icon.displayName = 'CornerDownRightFill'
/**
 * Remix Icon: Corner Down Right Fill
 * @see {@link https://remixicon.com/icon/corner-down-right-fill Remix Icon Docs}
 */
export const CornerDownRightFill = Icon
