import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10.83 13A3 3 0 1 0 8 15h8a3 3 0 1 0-2.83-2zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </svg>
  )
})
Icon.displayName = 'TapeFill'
/**
 * Remix Icon: Tape Fill
 * @see {@link https://remixicon.com/icon/tape-fill Remix Icon Docs}
 */
export const TapeFill = Icon
