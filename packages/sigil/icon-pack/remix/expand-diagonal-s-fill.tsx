import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 5h-7.5l3.043 3.043-6.5 6.5L5 11.5V19h7.5l-3.043-3.043 6.5-6.5L19 12.5z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandDiagonalSFill'
/**
 * Remix Icon: Expand Diagonal S Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-fill Remix Icon Docs}
 */
export const ExpandDiagonalSFill = Icon
