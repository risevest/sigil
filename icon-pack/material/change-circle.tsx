import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.17 14.76L15.07 13.66C15.78 12.33 15.6 10.65 14.48 9.53C13.79 8.84 12.9 8.5 12 8.5C11.97 8.5 11.94 8.51 11.91 8.51L13 9.6L11.94 10.66L9.11 7.83L11.94 5L13 6.06L12.04 7.02C13.31 7.03 14.57 7.5 15.54 8.46C17.24 10.17 17.45 12.82 16.17 14.76ZM14.89 16.17L12.06 19L11 17.94L11.95 16.99C10.69 16.98 9.43 16.49 8.47 15.53C6.76 13.82 6.55 11.18 7.83 9.24L8.93 10.34C8.22 11.67 8.4 13.35 9.52 14.47C10.22 15.17 11.15 15.51 12.08 15.48L11 14.4L12.06 13.34L14.89 16.17Z" />
    </Svg>
  )
}

Icon.displayName = 'ChangeCircle'

/**
 * Material Icon: Change Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:change_circle Material Icon Docs}
 */
export const ChangeCircle = memo(Icon)
