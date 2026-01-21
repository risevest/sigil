import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Number5 = /* @__PURE__ */ memo(function Number5(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 2v2H9.3l-.677 6.445a6.5 6.5 0 1 1-2.93 7.133l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-4.5-4.5c-2.022 0-3.278.639-3.96 1.53l-1.575-1.182L7.5 2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Number 5
 * @see {@link https://remixicon.com/icon/number-5 Remix Icon Docs}
 */
export { Number5 }
