import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 7V9H8V11H4V13H8V15H3V17H8C9.1 17 10 16.1 10 15V13.5C10 12.67 9.33 12 8.5 12C9.33 12 10 11.33 10 10.5V9C10 7.9 9.1 7 8 7H3ZM21 11V15C21 16.1 20.1 17 19 17H14C12.9 17 12 16.1 12 15V9C12 7.9 12.9 7 14 7H19C20.1 7 21 7.9 21 9H14V15H19V13H16.5V11H21Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi3gMobiledata'

/**
 * Material Icon: 3g Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:3g_mobiledata Material Icon Docs}
 */
export const Mi3gMobiledata = memo(Icon)
