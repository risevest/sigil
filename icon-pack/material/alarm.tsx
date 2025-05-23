import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4995 8.09527H10.9995V14.0953L15.7495 16.9453L16.4995 15.7153L12.4995 13.3453V8.09527ZM17.3365 1.90527L21.9435 5.75027L20.6635 7.28527L16.0535 3.44227L17.3365 1.90527ZM6.66252 1.90527L7.94452 3.44127L3.33652 7.28527L2.05652 5.74927L6.66252 1.90527ZM11.9995 4.09527C7.02952 4.09527 2.99952 8.12527 2.99952 13.0953C2.99952 18.0653 7.02952 22.0953 11.9995 22.0953C16.9695 22.0953 20.9995 18.0653 20.9995 13.0953C20.9995 8.12527 16.9695 4.09527 11.9995 4.09527ZM11.9995 20.0953C8.13952 20.0953 4.99952 16.9553 4.99952 13.0953C4.99952 9.23527 8.13952 6.09527 11.9995 6.09527C15.8595 6.09527 18.9995 9.23527 18.9995 13.0953C18.9995 16.9553 15.8595 20.0953 11.9995 20.0953Z" />
    </Svg>
  )
}

Icon.displayName = 'Alarm'

/**
 * Material Icon: Alarm
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:alarm Material Icon Docs}
 */
export const Alarm = memo(Icon)
