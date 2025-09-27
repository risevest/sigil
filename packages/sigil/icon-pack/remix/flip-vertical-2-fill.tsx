import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 7 4-4 4 4h-3v4h3l-4 4-4-4h3v-4z" />
    </Svg>
  )
})
Icon.displayName = 'FlipVertical2Fill'
/**
 * Remix Icon: Flip Vertical 2 Fill
 * @see {@link https://remixicon.com/icon/flip-vertical-2-fill Remix Icon Docs}
 */
export const FlipVertical2Fill = Icon
