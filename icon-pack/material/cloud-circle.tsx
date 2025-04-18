import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.29 10.19C15.89 8.18 14.13 6.67 12 6.67C10.31 6.67 8.85 7.63 8.12 9.03C6.36 9.21 5 10.7 5 12.5C5 14.43 6.57 16 8.5 16H16.08C17.69 16 19 14.69 19 13.08C19 11.54 17.8 10.29 16.29 10.19ZM16 14H8.5C7.67 14 7 13.33 7 12.5C7 11.67 7.67 11 8.5 11H9.4L9.89 9.95C10.3 9.16 11.11 8.67 12 8.67C13.13 8.67 14.11 9.47 14.33 10.58L14.61 12H16C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14Z" />
    </Svg>
  )
}

Icon.displayName = 'CloudCircle'

/**
 * Material Icon: Cloud Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cloud_circle Material Icon Docs}
 */
export const CloudCircle = memo(Icon)
