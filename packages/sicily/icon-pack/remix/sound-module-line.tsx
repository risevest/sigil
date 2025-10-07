import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z" />
    </svg>
  )
})
Icon.displayName = 'SoundModuleLine'
/**
 * Remix Icon: Sound Module Line
 * @see {@link https://remixicon.com/icon/sound-module-line Remix Icon Docs}
 */
export const SoundModuleLine = Icon
