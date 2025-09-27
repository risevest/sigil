import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 9q-3 0-5 1a5 5 0 0 0 10 0q-2-1-5-1M8.5 7c-1.152 0-2.122.78-2.412 1.84L6.05 9h4.9A2.5 2.5 0 0 0 8.5 7m7 0c-1.152 0-2.122.78-2.412 1.84L13.05 9h4.9a2.5 2.5 0 0 0-2.45-2" />
    </Svg>
  )
})
Icon.displayName = 'EmotionLaughFill'
/**
 * Remix Icon: Emotion Laugh Fill
 * @see {@link https://remixicon.com/icon/emotion-laugh-fill Remix Icon Docs}
 */
export const EmotionLaughFill = Icon
