import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H11V19H5ZM19 19H13V12H19V19ZM19 10H13V5H19V10Z" />
    </Svg>
  )
}

Icon.displayName = 'SpaceDashboard'

/**
 * Material Icon: Space Dashboard
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:space_dashboard Material Icon Docs}
 */
export const SpaceDashboard = memo(Icon)
