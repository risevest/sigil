import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4L15 7H17V20H19V7H21L18 4ZM11.8 15.5V10.5L14 9.6V7.5L3 12.25V13.75L14 18.5V16.4L11.8 15.5ZM4.98 13L10 11.13V14.87L4.98 13Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotateUp'

/**
 * Material Icon: Text Rotate Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotate_up Material Icon Docs}
 */
export const TextRotateUp = memo(Icon)
