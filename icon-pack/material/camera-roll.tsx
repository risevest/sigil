import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 5.5C14 4.4 13.1 3.5 12 3.5H11V2.5C11 1.95 10.55 1.5 10 1.5H6C5.45 1.5 5 1.95 5 2.5V3.5H4C2.9 3.5 2 4.4 2 5.5V20.5C2 21.6 2.9 22.5 4 22.5H12C13.1 22.5 14 21.6 14 20.5H22V5.5H14ZM20 18.5H12V20.5H4V5.5H7V3.5H9V5.5H12V7.5H20V18.5ZM9 15.5H11V17.5H9V15.5ZM9 8.5H11V10.5H9V8.5ZM13 15.5H15V17.5H13V15.5ZM13 8.5H15V10.5H13V8.5ZM17 15.5H19V17.5H17V15.5ZM17 8.5H19V10.5H17V8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraRoll'

/**
 * Material Icon: Camera Roll
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_roll Material Icon Docs}
 */
export const CameraRoll = memo(Icon)
