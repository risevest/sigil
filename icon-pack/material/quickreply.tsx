import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.75 16.67V3.5H19.75V9.5H21.75V3.5C21.75 2.4 20.85 1.5 19.75 1.5H3.75C2.65 1.5 1.76 2.4 1.76 3.5L1.75 21.5L5.75 17.5H14.75V15.5H4.92L3.75 16.67Z" />
      <Path d="M22.25 15.5H20.05L21.75 11.5H16.75V17.5H18.75V22.5L22.25 15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Quickreply'

/**
 * Material Icon: Quickreply
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:quickreply Material Icon Docs}
 */
export const Quickreply = memo(Icon)
