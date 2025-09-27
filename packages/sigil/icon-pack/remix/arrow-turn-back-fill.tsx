import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 16h-4l5 6 5-6h-4v-5a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowTurnBackFill'
/**
 * Remix Icon: Arrow Turn Back Fill
 * @see {@link https://remixicon.com/icon/arrow-turn-back-fill Remix Icon Docs}
 */
export const ArrowTurnBackFill = Icon
