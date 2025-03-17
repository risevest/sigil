import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.5 13.5C1.5 18.47 5.53 22.5 10.5 22.5C12.26 22.5 13.9 21.99 15.29 21.12L13.83 19.66C12.84 20.19 11.7 20.5 10.5 20.5C6.64 20.5 3.5 17.36 3.5 13.5C3.5 9.64 6.64 6.5 10.5 6.5H10.67L9.09 8.09L10.5 9.5L14.5 5.5L10.5 1.5L9.08 2.91L10.67 4.5H10.5C5.53 4.5 1.5 8.53 1.5 13.5ZM10.5 13.5L16.5 19.5L22.5 13.5L16.5 7.5L10.5 13.5ZM16.5 16.67L13.33 13.5L16.5 10.33L19.67 13.5L16.5 16.67Z" />
    </Svg>
  )
}

Icon.displayName = 'Rotate90DegreesCw'

/**
 * Material Icon: Rotate 90 Degrees Cw
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rotate_90_degrees_cw Material Icon Docs}
 */
export const Rotate90DegreesCw = memo(Icon)
