import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 19H19V21H3V19ZM19 3H3V13C3 15.21 4.79 17 7 17H13C15.21 17 17 15.21 17 13V10H19C20.11 10 21 9.1 21 8V5C21 3.89 20.11 3 19 3ZM15 13C15 14.1 14.1 15 13 15H7C5.9 15 5 14.1 5 13V5H15V13ZM19 8H17V5H19V8Z" />
    </Svg>
  )
}

Icon.displayName = 'FreeBreakfast'

/**
 * Material Icon: Free Breakfast
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:free_breakfast Material Icon Docs}
 */
export const FreeBreakfast = memo(Icon)
