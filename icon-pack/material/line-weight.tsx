import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 17H21V15H3V17ZM3 20H21V19H3V20ZM3 13H21V10H3V13ZM3 4V8H21V4H3Z" />
    </Svg>
  )
}

Icon.displayName = 'LineWeight'

/**
 * Material Icon: Line Weight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:line_weight Material Icon Docs}
 */
export const LineWeight = memo(Icon)
