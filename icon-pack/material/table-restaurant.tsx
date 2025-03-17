import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.96 9.73L20.53 4.73C20.41 4.3 20.02 4 19.57 4H4.42997C3.97997 4 3.58997 4.3 3.46997 4.73L2.03997 9.73C1.85997 10.36 2.33997 11 2.99997 11H5.19997L3.99997 20H5.99997L6.66997 15H17.34L18 20H20L18.8 11H21C21.66 11 22.14 10.36 21.96 9.73ZM6.92997 13L7.19997 11H16.8L17.07 13H6.92997ZM4.32997 9L5.18997 6H18.82L19.68 9H4.32997Z" />
    </Svg>
  )
}

Icon.displayName = 'TableRestaurant'

/**
 * Material Icon: Table Restaurant
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:table_restaurant Material Icon Docs}
 */
export const TableRestaurant = memo(Icon)
