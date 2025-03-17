import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5ZM15 16H5V8H15V16ZM7.11 11.11L11 15L14.77 11.21L13.99 10.42L11 13.43L7.89 10.33H10.44V9.22H6V13.66H7.11V11.11Z" />
    </Svg>
  )
}

Icon.displayName = 'MissedVideoCall'

/**
 * Material Icon: Missed Video Call
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:missed_video_call Material Icon Docs}
 */
export const MissedVideoCall = memo(Icon)
