import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 10.48V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V13.52L22 17.5V6.5L18 10.48ZM16 18H4V6H16V18ZM12 12L15 13.73L14 15.46L11 13.73V17H9V13.73L6 15.46L5 13.73L8 12L5 10.27L6 8.54L9 10.27V7H11V10.27L14 8.54L15 10.27L12 12Z" />
    </Svg>
  )
}

Icon.displayName = 'EmergencyRecording'

/**
 * Material Icon: Emergency Recording
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emergency_recording Material Icon Docs}
 */
export const EmergencyRecording = memo(Icon)
