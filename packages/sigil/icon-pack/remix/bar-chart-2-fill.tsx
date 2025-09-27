import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 13h6v8H2zM9 3h6v18H9zm7 5h6v13h-6z" />
    </Svg>
  )
})
Icon.displayName = 'BarChart2Fill'
/**
 * Remix Icon: Bar Chart 2 Fill
 * @see {@link https://remixicon.com/icon/bar-chart-2-fill Remix Icon Docs}
 */
export const BarChart2Fill = Icon
