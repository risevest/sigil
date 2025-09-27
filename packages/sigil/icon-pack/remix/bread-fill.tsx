import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1 7a4 4 0 0 1 4-4h2a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3H6a3 3 0 0 1-3-3v-8.535A4 4 0 0 1 1 7m7 15v-2a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 7 5V3h12a4 4 0 0 1 2 7.465V19a3 3 0 0 1-3 3z" />
    </Svg>
  )
})
Icon.displayName = 'BreadFill'
/**
 * Remix Icon: Bread Fill
 * @see {@link https://remixicon.com/icon/bread-fill Remix Icon Docs}
 */
export const BreadFill = Icon
