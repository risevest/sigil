import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 5V13C16 14.1 15.1 15 14 15H8C6.9 15 6 14.1 6 13V5H16ZM20 3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.11 10 22 9.11 22 8V5C22 3.89 21.11 3 20 3ZM18 8V5H20V8H18ZM20 19H2V21H20V19Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalCafe'

/**
 * Material Icon: Local Cafe
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_cafe Material Icon Docs}
 */
export const LocalCafe = memo(Icon)
