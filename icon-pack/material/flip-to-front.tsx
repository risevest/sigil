import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM5 21V19H3C3 20.1 3.89 21 5 21ZM3 9H5V7H3V9ZM15 21H17V19H15V21ZM19 3H9C7.89 3 7 3.9 7 5V15C7 16.1 7.89 17 9 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3ZM19 15H9V5H19V15ZM11 21H13V19H11V21ZM7 21H9V19H7V21Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipToFront'

/**
 * Material Icon: Flip To Front
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flip_to_front Material Icon Docs}
 */
export const FlipToFront = memo(Icon)
