import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.722V4H1V2h22v2zM5 4v13.745l7 3.1 7-3.1V4zm3 4h8v2H8zm0 4h8v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'HonourLine'
/**
 * Remix Icon: Honour Line
 * @see {@link https://remixicon.com/icon/honour-line Remix Icon Docs}
 */
export const HonourLine = Icon
