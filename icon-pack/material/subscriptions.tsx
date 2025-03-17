import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM20 10H4C2.9 10 2 10.9 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H4V12H20V20ZM10 12.73V19.26L16 16L10 12.73Z" />
    </Svg>
  )
}

Icon.displayName = 'Subscriptions'

/**
 * Material Icon: Subscriptions
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subscriptions Material Icon Docs}
 */
export const Subscriptions = memo(Icon)
