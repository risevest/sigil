import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SendPlaneFill = /* @__PURE__ */ memo(function SendPlaneFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Send Plane Fill
 * @see {@link https://remixicon.com/icon/send-plane-fill Remix Icon Docs}
 */
export { SendPlaneFill }
