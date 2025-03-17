import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.76 16.2397C6.67 15.1597 6 13.6597 6 11.9997C6 10.3397 6.67 8.83969 7.76 7.75969L9.18 9.17969C8.45 9.89969 8 10.8997 8 11.9997C8 13.0997 8.45 14.0997 9.17 14.8297L7.76 16.2397ZM16.24 16.2397C17.33 15.1597 18 13.6597 18 11.9997C18 10.3397 17.33 8.83969 16.24 7.75969L14.82 9.17969C15.55 9.89969 16 10.8997 16 11.9997C16 13.0997 15.55 14.0997 14.83 14.8297L16.24 16.2397ZM12 9.99969C10.9 9.99969 10 10.8997 10 11.9997C10 13.0997 10.9 13.9997 12 13.9997C13.1 13.9997 14 13.0997 14 11.9997C14 10.8997 13.1 9.99969 12 9.99969ZM20 11.9997C20 14.2097 19.1 16.2097 17.65 17.6497L19.07 19.0697C20.88 17.2597 22 14.7597 22 11.9997C22 9.23969 20.88 6.73969 19.07 4.92969L17.65 6.34969C19.1 7.78969 20 9.78969 20 11.9997ZM6.35 6.34969L4.93 4.92969C3.12 6.73969 2 9.23969 2 11.9997C2 14.7597 3.12 17.2597 4.93 19.0697L6.35 17.6497C4.9 16.2097 4 14.2097 4 11.9997C4 9.78969 4.9 7.78969 6.35 6.34969Z" />
    </Svg>
  )
}

Icon.displayName = 'Sensors'

/**
 * Material Icon: Sensors
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sensors Material Icon Docs}
 */
export const Sensors = memo(Icon)
