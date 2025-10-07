import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.904 2.1 9.9 1.414 1.414 9.9-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm2.829 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829" />
    </Svg>
  )
})
Icon.displayName = 'PriceTag3Fill'
/**
 * Remix Icon: Price Tag 3 Fill
 * @see {@link https://remixicon.com/icon/price-tag-3-fill Remix Icon Docs}
 */
export const PriceTag3Fill = Icon
