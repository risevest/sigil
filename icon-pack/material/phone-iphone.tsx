import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 1H8C6.62 1 5.5 2.12 5.5 3.5V20.5C5.5 21.88 6.62 23 8 23H16C17.38 23 18.5 21.88 18.5 20.5V3.5C18.5 2.12 17.38 1 16 1ZM12 22C11.17 22 10.5 21.33 10.5 20.5C10.5 19.67 11.17 19 12 19C12.83 19 13.5 19.67 13.5 20.5C13.5 21.33 12.83 22 12 22ZM16.5 18H7.5V4H16.5V18Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneIphone'

/**
 * Material Icon: Phone Iphone
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_iphone Material Icon Docs}
 */
export const PhoneIphone = memo(Icon)
