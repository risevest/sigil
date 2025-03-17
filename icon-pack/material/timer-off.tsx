import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.71 1.19531H9.70998V3.19531H15.71V1.19531Z" />
      <Path d="M12.71 6.19531C16.58 6.19531 19.71 9.32531 19.71 13.1953C19.71 14.1353 19.52 15.0253 19.19 15.8453L20.69 17.3453C21.34 16.1053 21.71 14.6953 21.71 13.1953C21.71 11.0753 20.97 9.12531 19.74 7.58531L21.16 6.16531C20.73 5.65531 20.26 5.17531 19.75 4.75531L18.33 6.17531C16.78 4.93531 14.83 4.19531 12.71 4.19531C11.21 4.19531 9.79998 4.56531 8.55998 5.21531L10.06 6.71531C10.88 6.38531 11.77 6.19531 12.71 6.19531Z" />
      <Path d="M11.71 8.36531L13.71 10.3653V8.19531H11.71V8.36531Z" />
      <Path d="M3.51998 3.00531L2.09998 4.41531L5.49998 7.81531C4.37998 9.31531 3.70998 11.1753 3.70998 13.1953C3.70998 18.1653 7.72998 22.1953 12.71 22.1953C14.73 22.1953 16.59 21.5253 18.09 20.4053L20.49 22.8053L21.9 21.3953L3.51998 3.00531ZM12.71 20.1953C8.83998 20.1953 5.70998 17.0653 5.70998 13.1953C5.70998 11.7253 6.15998 10.3653 6.92998 9.24531L16.66 18.9753C15.54 19.7453 14.18 20.1953 12.71 20.1953Z" />
    </Svg>
  )
}

Icon.displayName = 'TimerOff'

/**
 * Material Icon: Timer Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:timer_off Material Icon Docs}
 */
export const TimerOff = memo(Icon)
