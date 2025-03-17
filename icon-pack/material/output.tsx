import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 17L21.5 12L16.5 7L15.09 8.41L17.67 11H8.5V13H17.67L15.09 15.59L16.5 17Z" />
      <Path d="M18.5 19H4.5V5H18.5V7H20.5V5C20.5 3.9 19.61 3 18.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H18.5C19.61 21 20.5 20.1 20.5 19V17H18.5V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Output'

/**
 * Material Icon: Output
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:output Material Icon Docs}
 */
export const Output = memo(Icon)
