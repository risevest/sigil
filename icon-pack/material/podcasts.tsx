import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 12C14 12.74 13.6 13.38 13 13.72V22H11V13.72C10.4 13.37 10 12.74 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12ZM12 6C8.69 6 6 8.69 6 12C6 13.74 6.75 15.31 7.94 16.4L9.36 14.98C8.53 14.25 8 13.19 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 13.19 15.47 14.25 14.64 14.98L16.06 16.4C17.25 15.31 18 13.74 18 12C18 8.69 15.31 6 12 6ZM12 2C6.48 2 2 6.48 2 12C2 14.85 3.2 17.41 5.11 19.24L6.53 17.82C4.98 16.36 4 14.29 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 14.29 19.02 16.36 17.47 17.82L18.89 19.24C20.8 17.41 22 14.85 22 12C22 6.48 17.52 2 12 2Z" />
    </Svg>
  )
}

Icon.displayName = 'Podcasts'

/**
 * Material Icon: Podcasts
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:podcasts Material Icon Docs}
 */
export const Podcasts = memo(Icon)
