import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 11C18.67 11 18.83 11.01 18.99 11.02L14.5 3H8.5L14.18 12.84C15.27 11.71 16.8 11 18.5 11Z" />
      <Path d="M7.65 4.52L1.5 15.5L4.5 21L10.83 10.03L7.65 4.52Z" />
      <Path d="M12.7 15.5H9.4L6.23 21H14.04C13.08 19.94 12.5 18.54 12.5 17C12.5 16.48 12.57 15.98 12.7 15.5Z" />
      <Path d="M19.5 16V13H17.5V16H14.5V18H17.5V21H19.5V18H22.5V16H19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddToDrive'

/**
 * Material Icon: Add To Drive
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_to_drive Material Icon Docs}
 */
export const AddToDrive = memo(Icon)
