import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 19L10.41 17.59L5.83 13H22V11H5.83L10.42 6.41L9 5L2 12L9 19Z" />
    </Svg>
  )
}

Icon.displayName = 'West'

/**
 * Material Icon: West
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:west Material Icon Docs}
 */
export const West = memo(Icon)
