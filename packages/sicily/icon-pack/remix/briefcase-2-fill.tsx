import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8v-3h-2v3H9v-3H7v3H4v6h16v-6zM9 3v2h6V3z" />
    </svg>
  )
})
Icon.displayName = 'Briefcase2Fill'
/**
 * Remix Icon: Briefcase 2 Fill
 * @see {@link https://remixicon.com/icon/briefcase-2-fill Remix Icon Docs}
 */
export const Briefcase2Fill = Icon
