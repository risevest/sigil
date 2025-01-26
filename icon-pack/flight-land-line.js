import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.949 14.8882C20.7346 15.6884 19.9121 16.1633 19.1119 15.9489L3.44528 11.751C3.00205 11.6323 2.69653 11.2271 2.70424 10.7683L2.79514 5.36515L4.24403 5.75338L5.15891 9.10435L10.2542 10.4696L9.88479 2.08844L11.8166 2.60608L14.6269 11.6413L19.8883 13.0511C20.6885 13.2655 21.1634 14.088 20.949 14.8882ZM4.00008 19H20.0001V21H4.00008V19Z" />
    </Svg>
  )
}

Icon.displayName = 'FlightLandLine'

/**
 * Remix Icon: Flight Land Line
 * @see {@link https://remixicon.com/icon/flight-land-line Remix Icon Docs}
 */
export const FlightLandLine = memo(Icon)