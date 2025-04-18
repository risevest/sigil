import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
      <Path d="M13.54 8.97C13.31 8.5 12.78 8.26 12.28 8.44L9 9.65V12H10V10.35L11.54 9.78L10.58 14.67L7.8 14.1L7.6 15.08L11.36 15.85L11.88 13.21L13 14.42V18H14V14.03L12.68 12.59L13.09 10.24C13.99 11.46 15.3 12 16 12V11C15.59 11 14.37 10.67 13.54 8.97Z" />
      <Path d="M13.5 8C14.0523 8 14.5 7.55228 14.5 7C14.5 6.44772 14.0523 6 13.5 6C12.9477 6 12.5 6.44772 12.5 7C12.5 7.55228 12.9477 8 13.5 8Z" />
    </Svg>
  )
}

Icon.displayName = 'RunCircle'

/**
 * Material Icon: Run Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:run_circle Material Icon Docs}
 */
export const RunCircle = memo(Icon)
