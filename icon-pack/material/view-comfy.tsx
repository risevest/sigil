import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4V20H22V4H2ZM4 6H20V11H4V6ZM4 18V13H8V18H4ZM10 18V13H20V18H10Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewComfy'

/**
 * Material Icon: View Comfy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_comfy Material Icon Docs}
 */
export const ViewComfy = memo(Icon)
