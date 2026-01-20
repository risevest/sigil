import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerDownRightFill = /* @__PURE__ */ memo(function CornerDownRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 14V5h2v7h7.586V6.586L21 13l-6.414 6.414V14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Down Right Fill
 * @see {@link https://remixicon.com/icon/corner-down-right-fill Remix Icon Docs}
 */
export { CornerDownRightFill }
