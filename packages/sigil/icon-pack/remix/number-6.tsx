import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Number6 = /* @__PURE__ */ memo(function Number6(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
    </Svg>
  )
})
/**
 * Remix Icon: Number 6
 * @see {@link https://remixicon.com/icon/number-6 Remix Icon Docs}
 */
export { Number6 }
