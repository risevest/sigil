import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareFill = /* @__PURE__ */ memo(function ShareFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.576 17.271-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Fill
 * @see {@link https://remixicon.com/icon/share-fill Remix Icon Docs}
 */
export { ShareFill }
