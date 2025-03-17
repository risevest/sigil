import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 3C15.57 3 14 4.57 14 6.5V8H10V6.5C10 4.57 8.43 3 6.5 3C4.57 3 3 4.57 3 6.5C3 8.43 4.57 10 6.5 10H8V14H6.5C4.57 14 3 15.57 3 17.5C3 19.43 4.57 21 6.5 21C8.43 21 10 19.43 10 17.5V16H14V17.5C14 19.43 15.57 21 17.5 21C19.43 21 21 19.43 21 17.5C21 15.57 19.43 14 17.5 14H16V10H17.5C19.43 10 21 8.43 21 6.5C21 4.57 19.43 3 17.5 3ZM16 8V6.5C16 5.67 16.67 5 17.5 5C18.33 5 19 5.67 19 6.5C19 7.33 18.33 8 17.5 8H16ZM6.5 8C5.67 8 5 7.33 5 6.5C5 5.67 5.67 5 6.5 5C7.33 5 8 5.67 8 6.5V8H6.5ZM10 14V10H14V14H10ZM17.5 19C16.67 19 16 18.33 16 17.5V16H17.5C18.33 16 19 16.67 19 17.5C19 18.33 18.33 19 17.5 19ZM6.5 19C5.67 19 5 18.33 5 17.5C5 16.67 5.67 16 6.5 16H8V17.5C8 18.33 7.33 19 6.5 19Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardCommandKey'

/**
 * Material Icon: Keyboard Command Key
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_command_key Material Icon Docs}
 */
export const KeyboardCommandKey = memo(Icon)
