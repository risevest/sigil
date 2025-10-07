import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 8H5v2h14zm0 6H5v2h14z" />
    </Svg>
  )
})
Icon.displayName = 'EqualLine'
/**
 * Remix Icon: Equal Line
 * @see {@link https://remixicon.com/icon/equal-line Remix Icon Docs}
 */
export const EqualLine = Icon
