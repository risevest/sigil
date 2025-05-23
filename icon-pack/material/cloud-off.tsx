import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M24 14.0697C24 11.4297 21.95 9.28969 19.35 9.10969C18.67 5.65969 15.64 3.06969 12 3.06969C10.67 3.06969 9.43 3.42969 8.35 4.03969L9.84 5.52969C10.51 5.23969 11.23 5.06969 12 5.06969C15.04 5.06969 17.5 7.52969 17.5 10.5697V11.0697H19C20.66 11.0697 22 12.4097 22 14.0697C22 15.0597 21.52 15.9197 20.79 16.4697L22.2 17.8797C23.29 16.9597 24 15.6097 24 14.0697ZM4.41 2.92969L3 4.33969L5.77 7.10969H5.35C2.34 7.42969 0 9.97969 0 13.0697C0 16.3797 2.69 19.0697 6 19.0697H17.73L19.73 21.0697L21.14 19.6597L4.41 2.92969ZM6 17.0697C3.79 17.0697 2 15.2797 2 13.0697C2 10.8597 3.79 9.06969 6 9.06969H7.73L15.73 17.0697H6Z" />
    </Svg>
  )
}

Icon.displayName = 'CloudOff'

/**
 * Material Icon: Cloud Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cloud_off Material Icon Docs}
 */
export const CloudOff = memo(Icon)
