import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 3C12.04 3 11.12 3.14 10.25 3.39C9.37 1.96 7.8 1 6 1C3.24 1 1 3.24 1 6C1 7.8 1.96 9.37 3.39 10.25C3.14 11.12 3 12.04 3 13C3 18.52 7.48 23 13 23C18.52 23 23 18.52 23 13C23 7.48 18.52 3 13 3ZM13 5C15.9 5 18.44 6.56 19.84 8.88C19.41 8.95 18.96 9 18.5 9C15.6 9 13.06 7.44 11.66 5.12C12.09 5.05 12.54 5 13 5ZM5.42 10.47C6.05 8.58 7.37 7 9.08 6.03C8.45 7.92 7.13 9.5 5.42 10.47ZM3 6C3 4.35 4.35 3 6 3C6.95 3 7.8 3.46 8.35 4.15C6.56 5.09 5.09 6.56 4.15 8.35C3.46 7.8 3 6.95 3 6ZM13 21C8.59 21 5 17.41 5 13C5 12.95 5.01 12.9 5.01 12.85C7.61 11.87 9.69 9.86 10.75 7.3C12.58 9.56 15.37 11 18.5 11C19.25 11 19.97 10.91 20.67 10.76C20.88 11.47 21 12.22 21 13C21 17.41 17.41 21 13 21Z" />
      <Path d="M10 15.25C10.6904 15.25 11.25 14.6904 11.25 14C11.25 13.3096 10.6904 12.75 10 12.75C9.30964 12.75 8.75 13.3096 8.75 14C8.75 14.6904 9.30964 15.25 10 15.25Z" />
      <Path d="M16 15.25C16.6904 15.25 17.25 14.6904 17.25 14C17.25 13.3096 16.6904 12.75 16 12.75C15.3096 12.75 14.75 13.3096 14.75 14C14.75 14.6904 15.3096 15.25 16 15.25Z" />
    </Svg>
  )
}

Icon.displayName = 'Face4'

/**
 * Material Icon: Face 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:face_4 Material Icon Docs}
 */
export const Face4 = memo(Icon)
