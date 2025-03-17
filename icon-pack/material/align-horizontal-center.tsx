import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 2H13V7H21V10H13V14H18V17H13V22H11V17H6V14H11V10H3V7H11V2Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignHorizontalCenter'

/**
 * Material Icon: Align Horizontal Center
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_horizontal_center Material Icon Docs}
 */
export const AlignHorizontalCenter = memo(Icon)
