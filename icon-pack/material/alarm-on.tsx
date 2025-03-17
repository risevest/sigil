import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5394 14.6253L8.4094 12.4953L7.3494 13.5553L10.5294 16.7353L16.5294 10.7353L15.4694 9.67527L10.5394 14.6253ZM17.3364 1.90527L21.9434 5.75027L20.6634 7.28527L16.0534 3.44227L17.3364 1.90527ZM6.6624 1.90527L7.9444 3.44127L3.3364 7.28527L2.0564 5.74927L6.6624 1.90527ZM11.9994 4.09527C7.0294 4.09527 2.9994 8.12527 2.9994 13.0953C2.9994 18.0653 7.0294 22.0953 11.9994 22.0953C16.9694 22.0953 20.9994 18.0653 20.9994 13.0953C20.9994 8.12527 16.9694 4.09527 11.9994 4.09527ZM11.9994 20.0953C8.1394 20.0953 4.9994 16.9553 4.9994 13.0953C4.9994 9.23527 8.1394 6.09527 11.9994 6.09527C15.8594 6.09527 18.9994 9.23527 18.9994 13.0953C18.9994 16.9553 15.8594 20.0953 11.9994 20.0953Z" />
    </Svg>
  )
}

Icon.displayName = 'AlarmOn'

/**
 * Material Icon: Alarm On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:alarm_on Material Icon Docs}
 */
export const AlarmOn = memo(Icon)
