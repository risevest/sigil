import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7m7.147 9H4.852l-.693 9H19.84zM14 13v2h-4v-2zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995z" />
    </svg>
  )
})
Icon.displayName = 'HandbagLine'
/**
 * Remix Icon: Handbag Line
 * @see {@link https://remixicon.com/icon/handbag-line Remix Icon Docs}
 */
export const HandbagLine = Icon
