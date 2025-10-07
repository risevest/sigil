import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v12h16V6z" />
    </svg>
  )
})
Icon.displayName = 'RectangleLine'
/**
 * Remix Icon: Rectangle Line
 * @see {@link https://remixicon.com/icon/rectangle-line Remix Icon Docs}
 */
export const RectangleLine = Icon
