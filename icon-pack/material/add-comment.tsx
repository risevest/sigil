import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4ZM20 17.17L18.83 16H4V4H20V17.17ZM13 5H11V9H7V11H11V15H13V11H17V9H13V5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddComment'

/**
 * Material Icon: Add Comment
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_comment Material Icon Docs}
 */
export const AddComment = memo(Icon)
