import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PriceTag3Line = /* @__PURE__ */ memo(function PriceTag3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.904 2.1 9.9 1.414 1.414 9.9-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm.707 2.122L3.833 12l8.485 8.485 7.779-7.778-1.061-7.425zm2.122 6.363a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.829" />
    </Svg>
  )
})
/**
 * Remix Icon: Price Tag 3 Line
 * @see {@link https://remixicon.com/icon/price-tag-3-line Remix Icon Docs}
 */
export { PriceTag3Line }
