import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6.99H16L12 3L8 6.99H11V17.01H8L12 21L16 17.01H13V6.99Z" />
    </Svg>
  )
}

Icon.displayName = 'Height'

/**
 * Material Icon: Height
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:height Material Icon Docs}
 */
export const Height = memo(Icon)
