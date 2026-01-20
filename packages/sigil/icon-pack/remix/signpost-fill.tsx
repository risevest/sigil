import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SignpostFill = /* @__PURE__ */ memo(function SignpostFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 5V2h-2v3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.414l4.293-4.293a1 1 0 0 0 0-1.414L17.414 5zm0 12h-2v5h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Signpost Fill
 * @see {@link https://remixicon.com/icon/signpost-fill Remix Icon Docs}
 */
export { SignpostFill }
