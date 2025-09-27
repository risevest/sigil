import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5v14h14V7.828L16.172 5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6M6 6h9v4H6z" />
    </Svg>
  )
})
Icon.displayName = 'Save2Line'
/**
 * Remix Icon: Save 2 Line
 * @see {@link https://remixicon.com/icon/save-2-line Remix Icon Docs}
 */
export const Save2Line = Icon
