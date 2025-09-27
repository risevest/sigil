import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 11H5v2h14z" />
    </Svg>
  )
})
Icon.displayName = 'SubtractFill'
/**
 * Remix Icon: Subtract Fill
 * @see {@link https://remixicon.com/icon/subtract-fill Remix Icon Docs}
 */
export const SubtractFill = Icon
