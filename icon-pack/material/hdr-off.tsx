import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.995 14.4553V12.4553H19.095L19.995 14.4553H21.495L20.595 12.3553C21.095 12.0553 21.495 11.5553 21.495 10.9553V9.95531C21.495 9.15531 20.795 8.45531 19.995 8.45531H16.495V13.3153L17.635 14.4553H17.995ZM17.995 9.95531H19.995V10.9553H17.995V9.95531ZM13.495 9.95531V10.3153L14.995 11.8153V9.95531C14.995 9.15531 14.295 8.45531 13.495 8.45531H11.635L13.135 9.95531H13.495ZM3.00501 1.94531L1.94501 3.00531L7.39501 8.45531H6.99501V10.4553H4.99501V8.45531H3.49501V14.4553H4.99501V11.9553H6.99501V14.4553H8.49501V9.55531L9.99501 11.0553V14.4553H13.395L20.995 22.0553L22.055 20.9953L3.00501 1.94531Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrOff'

/**
 * Material Icon: Hdr Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_off Material Icon Docs}
 */
export const HdrOff = memo(Icon)
