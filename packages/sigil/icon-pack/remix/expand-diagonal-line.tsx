import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.586 5H14V3h7v7h-2V6.414l-4.293 4.293-1.414-1.414zM3 14h2v3.586l4.293-4.293 1.414 1.414L6.414 19H10v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandDiagonalLine'
/**
 * Remix Icon: Expand Diagonal Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-line Remix Icon Docs}
 */
export const ExpandDiagonalLine = Icon
