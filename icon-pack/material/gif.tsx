import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.5 9H13V15H11.5V9ZM9 9H6C5.4 9 5 9.5 5 10V14C5 14.5 5.4 15 6 15H9C9.6 15 10 14.5 10 14V12H8.5V13.5H6.5V10.5H10V10C10 9.5 9.6 9 9 9ZM19 10.5V9H14.5V15H16V13H18V11.5H16V10.5H19Z" />
    </Svg>
  )
}

Icon.displayName = 'Gif'

/**
 * Material Icon: Gif
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gif Material Icon Docs}
 */
export const Gif = memo(Icon)
