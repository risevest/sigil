import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18.125V2.125H4V18.125H2V20.125H10.25C10.25 21.095 11.03 21.875 12 21.875C12.97 21.875 13.75 21.095 13.75 20.125H22V18.125H20ZM18 4.125V14.125H6V4.125H18ZM6 18.125V16.125H11V18.125H6ZM13 18.125V16.125H18V18.125H13Z" />
    </Svg>
  )
}

Icon.displayName = 'RollerShadesClosed'

/**
 * Material Icon: Roller Shades Closed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roller_shades_closed Material Icon Docs}
 */
export const RollerShadesClosed = memo(Icon)
