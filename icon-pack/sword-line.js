import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.4563 3L20.9991 3.00335L21.001 6.52648L15.5341 11.992L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L11.9981 15.528L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L8.46212 11.992L3.00181 6.53118L2.99907 3L6.54506 3.00335L11.9981 8.457L17.4563 3ZM9.87612 13.406L7.04807 16.234L7.75607 16.941L10.5831 14.113L9.87612 13.406ZM19.0001 5.001H18.2831L13.4121 9.87L14.1191 10.577L19.0001 5.698V5.001ZM5.00007 5.001V5.701L16.2411 16.942L16.9482 16.2349L5.71507 5.002L5.00007 5.001Z" />
    </Svg>
  )
}

Icon.displayName = 'SwordLine'

/**
 * Remix Icon: Sword Line
 * @see {@link https://remixicon.com/icon/sword-line Remix Icon Docs}
 */
export const SwordLine = memo(Icon)
