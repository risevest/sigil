import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H22V22H20V2ZM2 10H18V7H2V10ZM8 17H18V14H8V17Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignHorizontalRight'

/**
 * Material Icon: Align Horizontal Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_horizontal_right Material Icon Docs}
 */
export const AlignHorizontalRight = memo(Icon)
