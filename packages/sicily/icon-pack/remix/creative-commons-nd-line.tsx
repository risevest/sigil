import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 9h8v2H8zm0 6v-2h8v2zm-6-3C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
    </svg>
  )
})
Icon.displayName = 'CreativeCommonsNdLine'
/**
 * Remix Icon: Creative Commons Nd Line
 * @see {@link https://remixicon.com/icon/creative-commons-nd-line Remix Icon Docs}
 */
export const CreativeCommonsNdLine = Icon
