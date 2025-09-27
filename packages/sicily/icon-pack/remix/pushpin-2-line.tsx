import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z" />
    </svg>
  )
})
Icon.displayName = 'Pushpin2Line'
/**
 * Remix Icon: Pushpin 2 Line
 * @see {@link https://remixicon.com/icon/pushpin-2-line Remix Icon Docs}
 */
export const Pushpin2Line = Icon
