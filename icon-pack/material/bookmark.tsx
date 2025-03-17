import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" />
    </Svg>
  )
}

Icon.displayName = 'Bookmark'

/**
 * Material Icon: Bookmark
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bookmark Material Icon Docs}
 */
export const Bookmark = memo(Icon)
