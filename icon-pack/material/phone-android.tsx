import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM17 18H7V4H17V18ZM14 21H10V20H14V21Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneAndroid'

/**
 * Material Icon: Phone Android
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_android Material Icon Docs}
 */
export const PhoneAndroid = memo(Icon)
