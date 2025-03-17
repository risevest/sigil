import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.99951 11.0953H12.6295L8.99951 15.2953V17.0953H14.9995V15.0953H11.3695L14.9995 10.8953V9.09527H8.99951V11.0953ZM16.0555 3.44127L17.3375 1.90627L21.9445 5.75627L20.6645 7.29627L16.0555 3.44127ZM3.33551 7.28527L2.05551 5.74927L6.66151 1.90527L7.94151 3.44127L3.33551 7.28527ZM11.9995 6.09527C15.8595 6.09527 18.9995 9.23527 18.9995 13.0953C18.9995 16.9553 15.8595 20.0953 11.9995 20.0953C8.13951 20.0953 4.99951 16.9553 4.99951 13.0953C4.99951 9.23527 8.13951 6.09527 11.9995 6.09527ZM11.9995 4.09527C7.02951 4.09527 2.99951 8.12527 2.99951 13.0953C2.99951 18.0653 7.02951 22.0953 11.9995 22.0953C16.9695 22.0953 20.9995 18.0653 20.9995 13.0953C20.9995 8.12527 16.9695 4.09527 11.9995 4.09527Z" />
    </Svg>
  )
}

Icon.displayName = 'Snooze'

/**
 * Material Icon: Snooze
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:snooze Material Icon Docs}
 */
export const Snooze = memo(Icon)
