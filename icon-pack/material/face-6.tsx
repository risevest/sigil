import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C15.68 4 18.78 6.51 19.71 9.9C19.11 9.74 18.38 9.53 17.45 7.66C16.94 6.64 15.91 6 14.76 6H9.24C8.09 6 7.06 6.64 6.55 7.66C5.62 9.52 4.97 9.72 4.29 9.9C5.22 6.51 8.32 4 12 4ZM12 20C7.59 20 4 16.41 4 12C4 11.99 4 11.98 4 11.97C6.31 11.75 7.43 10.38 8.34 8.56C8.51 8.21 8.85 8 9.24 8H14.77C15.15 8 15.49 8.21 15.66 8.55C16.56 10.35 17.65 11.74 20 11.96C20 11.97 20 11.98 20 11.99C20 16.41 16.41 20 12 20Z" />
      <Path d="M9 14.25C9.69036 14.25 10.25 13.6904 10.25 13C10.25 12.3096 9.69036 11.75 9 11.75C8.30964 11.75 7.75 12.3096 7.75 13C7.75 13.6904 8.30964 14.25 9 14.25Z" />
      <Path d="M15 14.25C15.6904 14.25 16.25 13.6904 16.25 13C16.25 12.3096 15.6904 11.75 15 11.75C14.3096 11.75 13.75 12.3096 13.75 13C13.75 13.6904 14.3096 14.25 15 14.25Z" />
    </Svg>
  )
}

Icon.displayName = 'Face6'

/**
 * Material Icon: Face 6
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:face_6 Material Icon Docs}
 */
export const Face6 = memo(Icon)
