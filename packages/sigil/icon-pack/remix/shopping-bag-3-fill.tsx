import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12 4-1.5-2h-10l-1.5 2zm-9.5 4h-2v2a5 5 0 0 0 10 0v-2h-2v2a3 3 0 0 1-6 0z" />
    </Svg>
  )
})
Icon.displayName = 'ShoppingBag3Fill'
/**
 * Remix Icon: Shopping Bag 3 Fill
 * @see {@link https://remixicon.com/icon/shopping-bag-3-fill Remix Icon Docs}
 */
export const ShoppingBag3Fill = Icon
