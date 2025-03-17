import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" />
    </Svg>
  )
}

Icon.displayName = 'East'

/**
 * Material Icon: East
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:east Material Icon Docs}
 */
export const East = memo(Icon)
