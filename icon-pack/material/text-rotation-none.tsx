import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18L17 15V17H4V19H17V21L20 18ZM8.5 11.8H13.5L14.4 14H16.5L11.75 3H10.25L5.5 14H7.6L8.5 11.8ZM11 4.98L12.87 10H9.13L11 4.98Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotationNone'

/**
 * Material Icon: Text Rotation None
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotation_none Material Icon Docs}
 */
export const TextRotationNone = memo(Icon)
