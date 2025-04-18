import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.39 11.25C19.46 11.66 19.5 12.07 19.5 12.5C19.5 16.91 15.91 20.5 11.5 20.5C7.09 20.5 3.5 16.91 3.5 12.5C3.5 12.45 3.51 12.4 3.5 12.36C6.1 11.38 8.19 9.37 9.24 6.81C12.62 10.95 17.21 10.54 18.23 10.42L17.34 8.49C17.21 8.5 12.72 8.87 10.16 4.63C11.17 4.47 11.87 4.48 12.75 4.62C15.27 3.47 14.68 3.73 15.51 3.36C14.28 2.8 12.93 2.5 11.5 2.5C5.98 2.5 1.5 6.98 1.5 12.5C1.5 18.02 5.98 22.5 11.5 22.5C17.02 22.5 21.5 18.02 21.5 12.5C21.5 11.07 21.2 9.72 20.66 8.49L19.39 11.25ZM7.58 5.53C6.95 7.42 5.63 9 3.92 9.97C4.55 8.08 5.87 6.5 7.58 5.53Z" />
      <Path d="M14.5 14.75C15.1904 14.75 15.75 14.1904 15.75 13.5C15.75 12.8096 15.1904 12.25 14.5 12.25C13.8096 12.25 13.25 12.8096 13.25 13.5C13.25 14.1904 13.8096 14.75 14.5 14.75Z" />
      <Path d="M8.5 14.75C9.19036 14.75 9.75 14.1904 9.75 13.5C9.75 12.8096 9.19036 12.25 8.5 12.25C7.80964 12.25 7.25 12.8096 7.25 13.5C7.25 14.1904 7.80964 14.75 8.5 14.75Z" />
      <Path d="M22.5 5L20.1 3.9L19 1.5L17.9 3.9L15.5 5L17.9 6.1L19 8.5L20.1 6.1L22.5 5Z" />
    </Svg>
  )
}

Icon.displayName = 'FaceRetouchingNatural'

/**
 * Material Icon: Face Retouching Natural
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:face_retouching_natural Material Icon Docs}
 */
export const FaceRetouchingNatural = memo(Icon)
