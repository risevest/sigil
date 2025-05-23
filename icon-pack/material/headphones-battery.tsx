import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7H20V6H18V7H17C16.45 7 16 7.45 16 8V17C16 17.55 16.45 18 17 18H21C21.55 18 22 17.55 22 17V8C22 7.45 21.55 7 21 7ZM20 16H18V9H20V16Z" />
      <Path d="M8 6C4.69 6 2 8.69 2 12V16C2 17.1 2.9 18 4 18H6V13H3.5V12C3.5 9.52 5.52 7.5 8 7.5C10.48 7.5 12.5 9.52 12.5 12V13H10V18H12C13.1 18 14 17.1 14 16V12C14 8.69 11.31 6 8 6Z" />
    </Svg>
  )
}

Icon.displayName = 'HeadphonesBattery'

/**
 * Material Icon: Headphones Battery
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:headphones_battery Material Icon Docs}
 */
export const HeadphonesBattery = memo(Icon)
