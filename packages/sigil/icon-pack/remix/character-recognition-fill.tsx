import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.998 3v18h-18V3zm-8.001 3h-2L6.598 17h2.154l1.199-3h4.09l1.201 3h2.155zm-1 2.885L13.242 12H10.75z" />
    </Svg>
  )
})
Icon.displayName = 'CharacterRecognitionFill'
/**
 * Remix Icon: Character Recognition Fill
 * @see {@link https://remixicon.com/icon/character-recognition-fill Remix Icon Docs}
 */
export const CharacterRecognitionFill = Icon
