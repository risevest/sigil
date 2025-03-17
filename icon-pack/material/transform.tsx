import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 18V16H8V4H10L7 1L4 4H6V6H2V8H6V16C6 17.1 6.9 18 8 18H16V20H14L17 23L20 20H18V18H22ZM10 8H16V14H18V8C18 6.9 17.1 6 16 6H10V8Z" />
    </Svg>
  )
}

Icon.displayName = 'Transform'

/**
 * Material Icon: Transform
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:transform Material Icon Docs}
 */
export const Transform = memo(Icon)
