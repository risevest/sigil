import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z" />
    </svg>
  )
})
Icon.displayName = 'BracketsFill'
/**
 * Remix Icon: Brackets Fill
 * @see {@link https://remixicon.com/icon/brackets-fill Remix Icon Docs}
 */
export const BracketsFill = Icon
