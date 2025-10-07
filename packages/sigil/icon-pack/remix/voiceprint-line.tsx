import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z" />
    </Svg>
  )
})
Icon.displayName = 'VoiceprintLine'
/**
 * Remix Icon: Voiceprint Line
 * @see {@link https://remixicon.com/icon/voiceprint-line Remix Icon Docs}
 */
export const VoiceprintLine = Icon
