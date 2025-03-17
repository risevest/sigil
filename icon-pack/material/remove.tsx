import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 13H5V11H19V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Remove'

/**
 * Material Icon: Remove
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove Material Icon Docs}
 */
export const Remove = memo(Icon)
