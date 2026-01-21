import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VoiceRecognitionLine = /* @__PURE__ */ memo(function VoiceRecognitionLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Voice Recognition Line
 * @see {@link https://remixicon.com/icon/voice-recognition-line Remix Icon Docs}
 */
export { VoiceRecognitionLine }
