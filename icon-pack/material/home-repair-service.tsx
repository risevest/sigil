import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V20H22V10C22 8.9 21.1 8 20 8ZM9 6H15V8H9V6ZM20 18H4V15H6V16H8V15H16V16H18V15H20V18ZM18 13V12H16V13H8V12H6V13H4V10H20V13H18Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeRepairService'

/**
 * Material Icon: Home Repair Service
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:home_repair_service Material Icon Docs}
 */
export const HomeRepairService = memo(Icon)
