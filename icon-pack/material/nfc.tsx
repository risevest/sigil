import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20ZM18 6H13C11.9 6 11 6.9 11 8V10.28C10.4 10.63 10 11.26 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V8H16V16H8V8H10V6H6V18H18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Nfc'

/**
 * Material Icon: Nfc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nfc Material Icon Docs}
 */
export const Nfc = memo(Icon)
