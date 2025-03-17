import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" />
    </Svg>
  )
}

Icon.displayName = 'ChevronRight'

/**
 * Material Icon: Chevron Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:chevron_right Material Icon Docs}
 */
export const ChevronRight = memo(Icon)
