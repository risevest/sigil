import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19H5V5H14V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H19V19Z" />
      <Path d="M17 13H15V17H17V13Z" />
      <Path d="M9 10H7V17H9V10Z" />
      <Path d="M13 7H11V17H13V7Z" />
      <Path d="M19 5V3H17V5H15V7H17V9H19V7H21V5H19Z" />
    </Svg>
  )
}

Icon.displayName = 'AddChart'

/**
 * Material Icon: Add Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_chart Material Icon Docs}
 */
export const AddChart = memo(Icon)
