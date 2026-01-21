import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VoiceRecognitionFill = /* @__PURE__ */ memo(function VoiceRecognitionFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.998 3v18h-18V3zm-8 3h-2v12h2zm-4 3h-2v6h2zm8 0h-2v6h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Voice Recognition Fill
 * @see {@link https://remixicon.com/icon/voice-recognition-fill Remix Icon Docs}
 */
export { VoiceRecognitionFill }
