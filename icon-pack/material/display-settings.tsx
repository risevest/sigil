import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C2.89 3 2 3.89 2 5V17C2 18.1 2.89 19 4 19H8V21H16V19H20C21.1 19 22 18.1 22 17V5C22 3.89 21.1 3 20 3ZM20 17H4V5H20V17Z" />
      <Path d="M14 8.25H6V9.75H14V8.25Z" />
      <Path d="M16.5 9.75H18V8.25H16.5V7H15V11H16.5V9.75Z" />
      <Path d="M18 12.25H10V13.75H18V12.25Z" />
      <Path d="M7.5 15H9V11H7.5V12.25H6V13.75H7.5V15Z" />
    </Svg>
  )
}

Icon.displayName = 'DisplaySettings'

/**
 * Material Icon: Display Settings
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:display_settings Material Icon Docs}
 */
export const DisplaySettings = memo(Icon)
