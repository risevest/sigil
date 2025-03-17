import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 10.5C3.5 12.95 5.26 14.97 7.58 15.41L6.09 13.92L7.5 12.5L11.5 16.51L7.5 20.5L6.09 19.09L7.67 17.51V17.45C4.2 17.04 1.5 14.08 1.5 10.5C1.5 6.63 4.63 3.5 8.5 3.5H11.5V5.5H8.5C5.74 5.5 3.5 7.74 3.5 10.5Z" />
      <Path d="M22.5 10.5V3.5H13.5V10.5H22.5ZM20.5 8.5H15.5V5.5H20.5V8.5Z" />
      <Path d="M22.5 12.5H13.5V19.5H22.5V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'MoveDown'

/**
 * Material Icon: Move Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:move_down Material Icon Docs}
 */
export const MoveDown = memo(Icon)
