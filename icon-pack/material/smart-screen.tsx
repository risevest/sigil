import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 11.25H12.5V12.75H14V11.25Z" />
      <Path d="M16.5 11.25H15V12.75H16.5V11.25Z" />
      <Path d="M11.5 11.25H10V12.75H11.5V11.25Z" />
      <Path d="M9 11.25H7.5V12.75H9V11.25Z" />
      <Path d="M21 5H3C1.9 5 1 5.9 1 7V17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5ZM4 17H3V7H4V17ZM18 17H6V7H18V17ZM21 17H20V7H21V17Z" />
    </Svg>
  )
}

Icon.displayName = 'SmartScreen'

/**
 * Material Icon: Smart Screen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:smart_screen Material Icon Docs}
 */
export const SmartScreen = memo(Icon)
