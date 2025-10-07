import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.005 16V4h-2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1m2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
Icon.displayName = 'ShoppingCartLine'
/**
 * Remix Icon: Shopping Cart Line
 * @see {@link https://remixicon.com/icon/shopping-cart-line Remix Icon Docs}
 */
export const ShoppingCartLine = Icon
