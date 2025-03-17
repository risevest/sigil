import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.08 11H17.08V6H14.08V11H10.08V3H7.08001V11H1.92001V13H7.08001V21H10.08V13H14.08V18H17.08V13H22.08V11Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignVerticalCenter'

/**
 * Material Icon: Align Vertical Center
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_vertical_center Material Icon Docs}
 */
export const AlignVerticalCenter = memo(Icon)
