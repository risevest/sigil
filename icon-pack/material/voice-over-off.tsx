import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.7623 5.86L15.0823 7.55C15.8823 8.68 15.9123 10.13 15.1723 11.29L16.8723 12.99C18.7723 10.97 18.7423 8.01 16.7623 5.86ZM20.0723 2.5L18.4423 4.13C21.1623 7.1 21.2023 11.52 18.5823 14.69L20.2223 16.33C23.9623 12.44 23.9323 6.49 20.0723 2.5ZM9.43232 5.54L12.9623 9.07C12.7623 7.21 11.2923 5.74 9.43232 5.54ZM4.41232 3.36L3.00232 4.77L5.62232 7.39C5.23232 8 5.00232 8.72 5.00232 9.5C5.00232 11.71 6.79232 13.5 9.00232 13.5C9.78232 13.5 10.5023 13.27 11.1123 12.88L15.5123 17.28C13.7423 16.1 10.7823 15.5 9.00232 15.5C6.33232 15.5 1.00232 16.84 1.00232 19.5V21.5H17.0023V19.5C17.0023 19.13 16.8923 18.8 16.7123 18.48L19.7323 21.5L21.1423 20.09L4.41232 3.36ZM3.00232 19.5C3.22232 18.78 6.31232 17.5 9.00232 17.5C11.7023 17.5 14.8023 18.79 15.0023 19.5H3.00232ZM9.00232 11.5C7.90232 11.5 7.00232 10.6 7.00232 9.5C7.00232 9.28 7.04232 9.08 7.11232 8.88L9.62232 11.39C9.42232 11.46 9.22232 11.5 9.00232 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'VoiceOverOff'

/**
 * Material Icon: Voice Over Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:voice_over_off Material Icon Docs}
 */
export const VoiceOverOff = memo(Icon)
