import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.722V4H1V2h22v2zM8 12v2h8v-2zm0-4v2h8V8z" />
    </Svg>
  )
})
Icon.displayName = 'HonourFill'
/**
 * Remix Icon: Honour Fill
 * @see {@link https://remixicon.com/icon/honour-fill Remix Icon Docs}
 */
export const HonourFill = Icon
