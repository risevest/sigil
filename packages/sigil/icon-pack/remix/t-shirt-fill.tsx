import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TShirtFill = /* @__PURE__ */ memo(function TShirtFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m14.514 5 2.606-2.607a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.778 3.778V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V11.83L1.22 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 0L9.484 5z" />
    </Svg>
  )
})
/**
 * Remix Icon: T Shirt Fill
 * @see {@link https://remixicon.com/icon/t-shirt-fill Remix Icon Docs}
 */
export { TShirtFill }
