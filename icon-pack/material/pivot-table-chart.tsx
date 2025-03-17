import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 4.5C20.5 3.4 19.6 2.5 18.5 2.5H9.5V7.5H20.5V4.5ZM2.5 18.5C2.5 19.6 3.4 20.5 4.5 20.5H7.5V9.5H2.5V18.5ZM2.5 4.5V7.5H7.5V2.5H4.5C3.4 2.5 2.5 3.4 2.5 4.5ZM17.5 8.49L13.5 12.5L14.91 13.91L16.5 12.31V14.5C16.5 15.6 15.6 16.5 14.5 16.5H12.33L13.92 14.91L12.5 13.5L8.5 17.5L12.5 21.5L13.91 20.09L12.33 18.5H14.5C16.71 18.5 18.5 16.71 18.5 14.5V12.32L20.09 13.92L21.5 12.5L17.5 8.49Z" />
    </Svg>
  )
}

Icon.displayName = 'PivotTableChart'

/**
 * Material Icon: Pivot Table Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pivot_table_chart Material Icon Docs}
 */
export const PivotTableChart = memo(Icon)
