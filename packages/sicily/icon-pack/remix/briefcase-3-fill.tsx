import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 2v5h3V7zm-2 0H9v5h6zM7 7H4v5h3zm2-4v2h6V3z" />
    </svg>
  )
})
Icon.displayName = 'Briefcase3Fill'
/**
 * Remix Icon: Briefcase 3 Fill
 * @see {@link https://remixicon.com/icon/briefcase-3-fill Remix Icon Docs}
 */
export const Briefcase3Fill = Icon
