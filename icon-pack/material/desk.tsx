import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 6V18H4V8H14V18H16V16H20V18H22V6H2ZM20 8V10H16V8H20ZM16 14V12H20V14H16Z" />
    </Svg>
  )
}

Icon.displayName = 'Desk'

/**
 * Material Icon: Desk
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:desk Material Icon Docs}
 */
export const Desk = memo(Icon)
