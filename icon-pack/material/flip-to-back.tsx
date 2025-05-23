import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 7H7V9H9V7ZM9 11H7V13H9V11ZM9 3C7.89 3 7 3.9 7 5H9V3ZM13 15H11V17H13V15ZM19 3V5H21C21 3.9 20.1 3 19 3ZM13 3H11V5H13V3ZM9 17V15H7C7 16.1 7.89 17 9 17ZM19 13H21V11H19V13ZM19 9H21V7H19V9ZM19 17C20.1 17 21 16.1 21 15H19V17ZM5 7H3V19C3 20.1 3.89 21 5 21H17V19H5V7ZM15 5H17V3H15V5ZM15 17H17V15H15V17Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipToBack'

/**
 * Material Icon: Flip To Back
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flip_to_back Material Icon Docs}
 */
export const FlipToBack = memo(Icon)
