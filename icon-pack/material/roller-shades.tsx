import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM18 5V11H6V5H18ZM6 19V13H11V14.82C10.55 15.14 10.25 15.66 10.25 16.25C10.25 17.22 11.03 18 12 18C12.97 18 13.75 17.22 13.75 16.25C13.75 15.66 13.45 15.13 13 14.82V13H18V19H6Z" />
    </Svg>
  )
}

Icon.displayName = 'RollerShades'

/**
 * Material Icon: Roller Shades
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roller_shades Material Icon Docs}
 */
export const RollerShades = memo(Icon)
