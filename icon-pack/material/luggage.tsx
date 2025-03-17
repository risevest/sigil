import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 18H8V9H9.5V18ZM12.75 18H11.25V9H12.75V18ZM16 18H14.5V9H16V18ZM17 6H15V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V6H7C5.9 6 5 6.9 5 8V19C5 20.1 5.9 21 7 21C7 21.55 7.45 22 8 22C8.55 22 9 21.55 9 21H15C15 21.55 15.45 22 16 22C16.55 22 17 21.55 17 21C18.1 21 19 20.1 19 19V8C19 6.9 18.1 6 17 6ZM10.5 3.5H13.5V6H10.5V3.5ZM17 19H7V8H17V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Luggage'

/**
 * Material Icon: Luggage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:luggage Material Icon Docs}
 */
export const Luggage = memo(Icon)
