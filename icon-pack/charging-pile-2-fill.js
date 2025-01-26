import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 11H19V7H20V4H22V7H23V11H22V18C22 19.6569 20.6569 21 19 21C17.3431 21 16 19.6569 16 18V14H14V19H15V21H2V19H3V4C3 3.44772 3.44772 3 4 3H13C13.5523 3 14 3.44772 14 4V12H16C17.1046 12 18 12.8954 18 14V18C18 18.5523 18.4477 19 19 19C19.5523 19 20 18.5523 20 18V11ZM9 11V7L5 13H8V17L12 11H9Z" />
    </Svg>
  )
}

Icon.displayName = 'ChargingPile2Fill'

/**
 * Remix Icon: Charging Pile 2 Fill
 * @see {@link https://remixicon.com/icon/charging-pile-2-fill Remix Icon Docs}
 */
export const ChargingPile2Fill = memo(Icon)