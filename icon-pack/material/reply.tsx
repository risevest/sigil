import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 8.5V4.5L3 11.5L10 18.5V14.4C15 14.4 18.5 16 21 19.5C20 14.5 17 9.5 10 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Reply'

/**
 * Material Icon: Reply
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:reply Material Icon Docs}
 */
export const Reply = memo(Icon)
