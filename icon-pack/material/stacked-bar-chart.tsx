import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 9H4V20H8V9Z" />
      <Path d="M8 4H4V8H8V4Z" />
      <Path d="M14 7H10V11H14V7Z" />
      <Path d="M20 10H16V14H20V10Z" />
      <Path d="M20 15H16V20H20V15Z" />
      <Path d="M14 12H10V20H14V12Z" />
    </Svg>
  )
}

Icon.displayName = 'StackedBarChart'

/**
 * Material Icon: Stacked Bar Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stacked_bar_chart Material Icon Docs}
 */
export const StackedBarChart = memo(Icon)
