import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 18H6V8H9V12.77L15.98 6L18 8.03L11.15 15H16V18Z" />
    </Svg>
  )
}

Icon.displayName = 'TransitEnterexit'

/**
 * Material Icon: Transit Enterexit
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:transit_enterexit Material Icon Docs}
 */
export const TransitEnterexit = memo(Icon)
