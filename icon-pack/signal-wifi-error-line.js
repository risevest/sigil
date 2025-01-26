import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L22.0539 8.55224C19.3066 6.33059 15.809 5 12.0005 5C8.91158 5 6.02706 5.87535 3.58152 7.39152L12.0005 17.8169L17.9999 10.388V13.571L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM22.0005 19V21H20.0005V19H22.0005ZM22.0005 10V17H20.0005V10H22.0005Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiErrorLine'

/**
 * Remix Icon: Signal Wifi Error Line
 * @see {@link https://remixicon.com/icon/signal-wifi-error-line Remix Icon Docs}
 */
export const SignalWifiErrorLine = memo(Icon)
