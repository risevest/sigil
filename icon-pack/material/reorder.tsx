import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 15H21V13H3V15ZM3 19H21V17H3V19ZM3 11H21V9H3V11ZM3 5V7H21V5H3Z" />
    </Svg>
  )
}

Icon.displayName = 'Reorder'

/**
 * Material Icon: Reorder
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:reorder Material Icon Docs}
 */
export const Reorder = memo(Icon)
