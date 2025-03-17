import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H15L7.11 16.63L4.5 12L9 4H5L0.5 12L5 20H9L16.89 7.37L19.5 12L15 20H19L23.5 12L19 4Z" />
    </Svg>
  )
}

Icon.displayName = 'Polymer'

/**
 * Material Icon: Polymer
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:polymer Material Icon Docs}
 */
export const Polymer = memo(Icon)
