import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-1 8V7H4v6zm2-6v6h3v-2h2v2h3V7zm10 6h2V7h-2zM9 3v2h6V3z" />
    </svg>
  )
})
Icon.displayName = 'Briefcase5Fill'
/**
 * Remix Icon: Briefcase 5 Fill
 * @see {@link https://remixicon.com/icon/briefcase-5-fill Remix Icon Docs}
 */
export const Briefcase5Fill = Icon
