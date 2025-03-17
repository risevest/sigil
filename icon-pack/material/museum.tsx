import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11V9L12 2L2 9V11H4V20H2V22H22V20H20V11H22ZM18 20H6V9H18V20Z" />
      <Path d="M10 14L12 17L14 14V18H16V11H14L12 14L10 11H8V18H10V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Museum'

/**
 * Material Icon: Museum
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:museum Material Icon Docs}
 */
export const Museum = memo(Icon)
