import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 7V5H19V2H17V5H13V2H11V5H7V2H5V5H2V7H5V11H2V13H5V17H2V19H5V22H7V19H11V22H13V19H17V22H19V19H22V17H19V13H22V11H19V7H22ZM7 7H11V11H7V7ZM7 17V13H11V17H7ZM17 17H13V13H17V17ZM17 11H13V7H17V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Grid4x4'

/**
 * Material Icon: Grid 4x 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grid_4x_4 Material Icon Docs}
 */
export const Grid4x4 = memo(Icon)
