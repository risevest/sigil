import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.72 5.39023C10.72 4.73023 11.26 4.19023 11.92 4.19023C12.58 4.19023 13.12 4.73023 13.12 5.39023L13.11 9.30023L14.92 11.0902V5.49023C14.92 3.83023 13.58 2.49023 11.92 2.49023C10.38 2.49023 9.13001 3.65023 8.96001 5.14023L10.72 6.90023V5.39023ZM18.92 11.4902H17.22C17.22 12.0702 17.12 12.6202 16.95 13.1302L18.22 14.4002C18.66 13.5202 18.92 12.5302 18.92 11.4902ZM4.33001 3.35023L2.92001 4.76023L8.92001 10.7602V11.4902C8.92001 13.1502 10.26 14.4902 11.92 14.4902C12.15 14.4902 12.36 14.4602 12.57 14.4102L14.23 16.0702C13.52 16.4002 12.73 16.5902 11.92 16.5902C9.16001 16.5902 6.62001 14.4902 6.62001 11.4902H4.92001C4.92001 14.9002 7.64001 17.7202 10.92 18.2102V21.4902H12.92V18.2102C13.83 18.0802 14.69 17.7602 15.47 17.3102L19.67 21.5102L21.08 20.1002L4.33001 3.35023Z" />
    </Svg>
  )
}

Icon.displayName = 'MicOff'

/**
 * Material Icon: Mic Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mic_off Material Icon Docs}
 */
export const MicOff = memo(Icon)
