import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-11-16h-2v2a5 5 0 0 0 10 0V6h-2v2a3 3 0 0 1-6 0z" />
    </Svg>
  )
})
Icon.displayName = 'ShoppingBag2Fill'
/**
 * Remix Icon: Shopping Bag 2 Fill
 * @see {@link https://remixicon.com/icon/shopping-bag-2-fill Remix Icon Docs}
 */
export const ShoppingBag2Fill = Icon
