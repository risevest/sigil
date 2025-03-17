import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 9.5H1V20.5C1 21.61 1.89 22.5 3 22.5H17C18.11 22.5 19 21.61 19 20.5H3V9.5ZM18 5.5V3.5C18 2.39 17.11 1.5 16 1.5H12C10.89 1.5 10 2.39 10 3.5V5.5H5V16.5C5 17.61 5.89 18.5 7 18.5H21C22.11 18.5 23 17.61 23 16.5V5.5H18ZM12 3.5H16V5.5H12V3.5ZM21 16.5H7V7.5H21V16.5ZM12 15.5L17.5 11.5L12 8.5V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ShopTwo'

/**
 * Material Icon: Shop Two
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shop_two Material Icon Docs}
 */
export const ShopTwo = memo(Icon)
