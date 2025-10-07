import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z" />
    </svg>
  )
})
Icon.displayName = 'FullscreenExitLine'
/**
 * Remix Icon: Fullscreen Exit Line
 * @see {@link https://remixicon.com/icon/fullscreen-exit-line Remix Icon Docs}
 */
export const FullscreenExitLine = Icon
