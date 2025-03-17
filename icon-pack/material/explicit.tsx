import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H15V11H11V9H15V7H9V17H15V15Z" />
    </Svg>
  )
}

Icon.displayName = 'Explicit'

/**
 * Material Icon: Explicit
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:explicit Material Icon Docs}
 */
export const Explicit = memo(Icon)
