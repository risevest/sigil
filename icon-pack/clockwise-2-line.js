import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5858 3.99997L8.75736 2.17154L10.1716 0.757324L14.4142 4.99997L10.1716 9.24261L8.75736 7.82839L10.5858 5.99997H8C6.34315 5.99997 5 7.34311 5 8.99997V13H3V8.99997C3 6.23854 5.23858 3.99997 8 3.99997H10.5858ZM9 11C9 10.4477 9.44772 9.99997 10 9.99997H20C20.5523 9.99997 21 10.4477 21 11V21C21 21.5522 20.5523 22 20 22H10C9.44772 22 9 21.5522 9 21V11ZM11 12V20H19V12H11Z" />
    </Svg>
  )
}

Icon.displayName = 'Clockwise2Line'

/**
 * Remix Icon: Clockwise 2 Line
 * @see {@link https://remixicon.com/icon/clockwise-2-line Remix Icon Docs}
 */
export const Clockwise2Line = memo(Icon)
