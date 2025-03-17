import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 22H2V20H22V22ZM10 2H7V18H10V2ZM17 8H14V18H17V8Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignVerticalBottom'

/**
 * Material Icon: Align Vertical Bottom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_vertical_bottom Material Icon Docs}
 */
export const AlignVerticalBottom = memo(Icon)
