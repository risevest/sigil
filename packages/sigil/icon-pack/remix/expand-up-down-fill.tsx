import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandUpDownFill = /* @__PURE__ */ memo(function ExpandUpDownFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18 9-6-6-6 6zm0 6-6 6-6-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Up Down Fill
 * @see {@link https://remixicon.com/icon/expand-up-down-fill Remix Icon Docs}
 */
export { ExpandUpDownFill }
