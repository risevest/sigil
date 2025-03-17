import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM8.57 6H6V8.58C7.42 8.58 8.57 7.42 8.57 6ZM12 6H10.29C10.29 8.36 8.37 10.29 6 10.29V12C9.32 12 12 9.31 12 6ZM14.14 11.86L11.14 15.73L9 13.15L6 17H18L14.14 11.86Z" />
    </Svg>
  )
}

Icon.displayName = 'Satellite'

/**
 * Material Icon: Satellite
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:satellite Material Icon Docs}
 */
export const Satellite = memo(Icon)
