import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h2v4H3zm6.788 18H7.66l6.551-18h2.129zM21 3h-2v4h2z" />
    </svg>
  )
})
Icon.displayName = 'SlashCommands'
/**
 * Remix Icon: Slash Commands
 * @see {@link https://remixicon.com/icon/slash-commands Remix Icon Docs}
 */
export const SlashCommands = Icon
