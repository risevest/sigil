import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20zm0-2h8.34A3 3 0 0 1 18 16.17V7.83A3 3 0 0 1 16.17 6H7.83A3 3 0 0 1 6 7.83v8.34A3 3 0 0 1 7.83 18M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
Icon.displayName = 'ShapeLine'
/**
 * Remix Icon: Shape Line
 * @see {@link https://remixicon.com/icon/shape-line Remix Icon Docs}
 */
export const ShapeLine = Icon
