import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 19.9898L9.5 12.4798L13.5 16.4798L20.59 8.50977L22 9.91977L13.5 19.4798L9.5 15.4798L3.5 21.4898L2 19.9898ZM3.5 15.4898L9.5 9.47976L13.5 13.4798L22 3.91977L20.59 2.50977L13.5 10.4798L9.5 6.47977L2 13.9898L3.5 15.4898Z" />
    </Svg>
  )
}

Icon.displayName = 'StackedLineChart'

/**
 * Material Icon: Stacked Line Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stacked_line_chart Material Icon Docs}
 */
export const StackedLineChart = memo(Icon)
