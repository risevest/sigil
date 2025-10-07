import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 6h6a3 3 0 1 0-6 0M7 6a5 5 0 0 1 10 0h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 8v12h14V8zm4 2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z" />
    </Svg>
  )
})
Icon.displayName = 'ShoppingBag4Line'
/**
 * Remix Icon: Shopping Bag 4 Line
 * @see {@link https://remixicon.com/icon/shopping-bag-4-line Remix Icon Docs}
 */
export const ShoppingBag4Line = Icon
