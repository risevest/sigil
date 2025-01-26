import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 1C16.5523 1 17 1.44772 17 2V3H22V9H19.981L22.7271 16.5448C22.9033 16.9958 23 17.4866 23 18C23 20.2091 21.2091 22 19 22C17.1362 22 15.5701 20.7252 15.126 19H10.874C10.4299 20.7252 8.86384 22 7 22C5.05551 22 3.43508 20.6125 3.07474 18.7736C2.43596 18.4396 2 17.7707 2 17V7C2 6.44772 2.44772 6 3 6H10C10.5523 6 11 6.44772 11 7V12C11 12.5523 11.4477 13 12 13H14C14.5523 13 15 12.5523 15 12V3H12V1H16ZM19 16C17.8954 16 17 16.8954 17 18C17 19.1046 17.8954 20 19 20C20.1046 20 21 19.1046 21 18C21 17.7597 20.9576 17.5292 20.8799 17.3158L20.8635 17.2724C20.5725 16.5276 19.8479 16 19 16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM9 8H4V10H9V8ZM20 5H17V7H20V5Z" />
    </Svg>
  )
}

Icon.displayName = 'EBike2Fill'

/**
 * Remix Icon: E Bike 2 Fill
 * @see {@link https://remixicon.com/icon/e-bike-2-fill Remix Icon Docs}
 */
export const EBike2Fill = memo(Icon)
