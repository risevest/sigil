import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 8L20.5 12L16.5 16L15.09 14.59L16.67 13H11.5V11H16.67L15.08 9.41L16.5 8ZM5.5 1.01L15.5 1C16.6 1 17.5 1.9 17.5 3V7H15.5V6H5.5V18H15.5V17H17.5V21C17.5 22.1 16.6 23 15.5 23H5.5C4.4 23 3.5 22.1 3.5 21V3C3.5 1.9 4.4 1.01 5.5 1.01ZM5.5 21H15.5V20H5.5V21ZM5.5 4H15.5V3H5.5V4Z" />
    </Svg>
  )
}

Icon.displayName = 'SendToMobile'

/**
 * Material Icon: Send To Mobile
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:send_to_mobile Material Icon Docs}
 */
export const SendToMobile = memo(Icon)
