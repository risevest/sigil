import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.715 7.7002H19.715V11.7002H18.715V13.7002C18.715 14.0402 18.635 14.3602 18.485 14.6402L16.715 12.8702V11.7002H15.715V7.7002ZM11.715 7.8702L13.715 9.8702V5.7002H15.715L12.715 1.7002L9.715 5.7002H11.715V7.8702ZM13.715 15.7002V17.9802C14.315 18.3202 14.715 18.9602 14.715 19.7002C14.715 20.8002 13.815 21.7002 12.715 21.7002C11.615 21.7002 10.715 20.8002 10.715 19.7002C10.715 18.9602 11.115 18.3302 11.715 17.9802V15.7002H8.715C7.605 15.7002 6.715 14.8102 6.715 13.7002V11.4202C6.115 11.0802 5.715 10.4402 5.715 9.7002C5.715 9.1102 5.975 8.5702 6.395 8.2102L2.105 3.9202L3.515 2.5102L21.895 20.8902L20.485 22.3002L13.885 15.7002H13.715ZM11.715 13.7002V13.5302L9.205 11.0202C9.065 11.1802 8.895 11.3102 8.715 11.4202V13.7002H11.715Z" />
    </Svg>
  )
}

Icon.displayName = 'UsbOff'

/**
 * Material Icon: Usb Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:usb_off Material Icon Docs}
 */
export const UsbOff = memo(Icon)
