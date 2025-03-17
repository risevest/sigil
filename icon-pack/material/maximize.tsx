import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 11H21V13H3V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Maximize'

/**
 * Material Icon: Maximize
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:maximize Material Icon Docs}
 */
export const Maximize = memo(Icon)
