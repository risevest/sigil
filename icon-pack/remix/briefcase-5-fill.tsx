import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM6 13V7H4V13H6ZM8 7V13H11V11H13V13H16V7H8ZM18 13H20V7H18V13ZM9 3V5H15V3H9Z" />
    </Svg>
  )
}

Icon.displayName = 'Briefcase5Fill'

/**
 * Remix Icon: Briefcase 5 Fill
 * @see {@link https://remixicon.com/icon/briefcase-5-fill Remix Icon Docs}
 */
export const Briefcase5Fill = memo(Icon)
