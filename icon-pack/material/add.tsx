import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Add'

/**
 * Material Icon: Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add Material Icon Docs}
 */
export const Add = memo(Icon)
