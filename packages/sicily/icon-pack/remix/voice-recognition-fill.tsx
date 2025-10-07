import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.998 3v18h-18V3zm-8 3h-2v12h2zm-4 3h-2v6h2zm8 0h-2v6h2z" />
    </svg>
  )
})
Icon.displayName = 'VoiceRecognitionFill'
/**
 * Remix Icon: Voice Recognition Fill
 * @see {@link https://remixicon.com/icon/voice-recognition-fill Remix Icon Docs}
 */
export const VoiceRecognitionFill = Icon
