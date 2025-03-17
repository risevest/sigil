import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM13 4.07C16.61 4.52 19.48 7.4 19.93 11H13V4.07ZM4 12C4 7.94 7.07 4.56 11 4.07V19.94C7.07 19.44 4 16.06 4 12ZM13 19.93V13H19.93C19.48 16.61 16.61 19.48 13 19.93Z" />
    </Svg>
  )
}

Icon.displayName = 'PieChartOutline'

/**
 * Material Icon: Pie Chart Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pie_chart_outline Material Icon Docs}
 */
export const PieChartOutline = memo(Icon)
