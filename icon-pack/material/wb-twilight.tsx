import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.0759 6.53981L16.9552 8.66201L18.37 10.0758L20.4907 7.95361L19.0759 6.53981Z" />
      <Path d="M22 18H2V20H22V18Z" />
      <Path d="M13 4H11V7H13V4Z" />
      <Path d="M4.95674 6.51064L3.54254 7.92484L5.66384 10.0461L7.07804 8.63194L4.95674 6.51064Z" />
      <Path d="M5 16H19C19 12.13 15.87 9 12 9C8.13 9 5 12.13 5 16Z" />
    </Svg>
  )
}

Icon.displayName = 'WbTwilight'

/**
 * Material Icon: Wb Twilight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_twilight Material Icon Docs}
 */
export const WbTwilight = memo(Icon)
