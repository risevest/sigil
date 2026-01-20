import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IndeterminateCircleFill = /* @__PURE__ */ memo(function IndeterminateCircleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M7 11v2h10v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Indeterminate Circle Fill
 * @see {@link https://remixicon.com/icon/indeterminate-circle-fill Remix Icon Docs}
 */
export { IndeterminateCircleFill }
