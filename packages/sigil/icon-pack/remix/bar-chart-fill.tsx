import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z" />
    </Svg>
  )
})
Icon.displayName = 'BarChartFill'
/**
 * Remix Icon: Bar Chart Fill
 * @see {@link https://remixicon.com/icon/bar-chart-fill Remix Icon Docs}
 */
export const BarChartFill = Icon
