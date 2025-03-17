import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.5L18 10V19H6V10L12 5.5ZM12 3L4 9V21H20V9L12 3ZM11.5 9.5V12.5H11V9.5H10V12.5H9.5V9.5H8.5V12.5C8.5 13.33 9.17 14 10 14V18H11V14C11.83 14 12.5 13.33 12.5 12.5V9.5H11.5ZM13 11.5V14.5H14V18H15V9.5C13.9 9.5 13 10.4 13 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FoodBank'

/**
 * Material Icon: Food Bank
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:food_bank Material Icon Docs}
 */
export const FoodBank = memo(Icon)
