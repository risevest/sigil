import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 8.414V12H5V5h7v2H8.414L17 15.586V12h2v7h-7v-2h3.586z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandDiagonalS2Line'
/**
 * Remix Icon: Expand Diagonal S 2 Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-2-line Remix Icon Docs}
 */
export const ExpandDiagonalS2Line = Icon
