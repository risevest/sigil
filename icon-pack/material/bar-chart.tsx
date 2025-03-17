import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 9H4V20H8V9Z" />
      <Path d="M20 13H16V20H20V13Z" />
      <Path d="M14 4H10V20H14V4Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChart'

/**
 * Material Icon: Bar Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bar_chart Material Icon Docs}
 */
export const BarChart = memo(Icon)
