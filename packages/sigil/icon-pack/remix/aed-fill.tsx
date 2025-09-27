import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10 8-5 7v-5H8l5-7v5z" />
    </Svg>
  )
})
Icon.displayName = 'AedFill'
/**
 * Remix Icon: Aed Fill
 * @see {@link https://remixicon.com/icon/aed-fill Remix Icon Docs}
 */
export const AedFill = Icon
