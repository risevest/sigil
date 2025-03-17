import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 2V4H2V2H22ZM7 22H10V6H7V22ZM14 16H17V6H14V16Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignVerticalTop'

/**
 * Material Icon: Align Vertical Top
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_vertical_top Material Icon Docs}
 */
export const AlignVerticalTop = memo(Icon)
