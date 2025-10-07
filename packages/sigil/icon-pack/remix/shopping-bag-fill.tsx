import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5m5 10h-2v1a1 1 0 0 0 1.993.116l.007-.116zm-8 0h-2v1a1 1 0 0 0 1.993.116L9.005 12zm3-8A3 3 0 0 0 9.01 5.823L9.005 6v2h6V6a3 3 0 0 0-2.824-2.995z" />
    </Svg>
  )
})
Icon.displayName = 'ShoppingBagFill'
/**
 * Remix Icon: Shopping Bag Fill
 * @see {@link https://remixicon.com/icon/shopping-bag-fill Remix Icon Docs}
 */
export const ShoppingBagFill = Icon
