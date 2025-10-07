import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z" />
    </svg>
  )
})
Icon.displayName = 'Space'
/**
 * Remix Icon: Space
 * @see {@link https://remixicon.com/icon/space Remix Icon Docs}
 */
export const Space = Icon
