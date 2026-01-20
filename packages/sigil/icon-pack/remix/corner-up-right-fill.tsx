import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerUpRightFill = /* @__PURE__ */ memo(function CornerUpRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 10v9h2v-7h7.586v5.414L21 11l-6.414-6.414V10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Up Right Fill
 * @see {@link https://remixicon.com/icon/corner-up-right-fill Remix Icon Docs}
 */
export { CornerUpRightFill }
