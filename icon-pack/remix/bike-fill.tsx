import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.5 12H4V7H2V5H8V7H6V9.79548L15.8131 7.16607L15.2327 5H12V3H15.9784C16.4286 2.98994 16.8442 3.28693 16.9659 3.74118L18.5188 9.53674L16.587 10.0544L16.3307 9.09792L5.5 12ZM5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C7.20914 13 9 14.7909 9 17C9 19.2091 7.20914 21 5 21ZM5 18C5.55228 18 6 17.5523 6 17C6 16.4477 5.55228 16 5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18ZM18 21C15.2386 21 13 18.7614 13 16C13 13.2386 15.2386 11 18 11C20.7614 11 23 13.2386 23 16C23 18.7614 20.7614 21 18 21ZM18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z" />
    </Svg>
  )
}

Icon.displayName = 'BikeFill'

/**
 * Remix Icon: Bike Fill
 * @see {@link https://remixicon.com/icon/bike-fill Remix Icon Docs}
 */
export const BikeFill = memo(Icon)
