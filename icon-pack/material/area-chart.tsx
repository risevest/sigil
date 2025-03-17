import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 7.5L12 3.5L7 10.5L3 7.5V20.5H21V7.5H17ZM19 17.45L12 12L8 17.5L5 15.1V11.5L7.44 13.33L12.4 6.38L16.3 9.5H19V17.45Z" />
    </Svg>
  )
}

Icon.displayName = 'AreaChart'

/**
 * Material Icon: Area Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:area_chart Material Icon Docs}
 */
export const AreaChart = memo(Icon)
