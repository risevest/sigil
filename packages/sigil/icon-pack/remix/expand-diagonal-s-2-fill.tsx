import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5v7.5l3.043-3.043 6.5 6.5L11.5 19H19v-7.5l-3.043 3.043-6.5-6.5L12.5 5z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandDiagonalS2Fill'
/**
 * Remix Icon: Expand Diagonal S 2 Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-2-fill Remix Icon Docs}
 */
export const ExpandDiagonalS2Fill = Icon
