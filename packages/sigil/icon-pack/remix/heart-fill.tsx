import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HeartFill = /* @__PURE__ */ memo(function HeartFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464" />
    </Svg>
  )
})
/**
 * Remix Icon: Heart Fill
 * @see {@link https://remixicon.com/icon/heart-fill Remix Icon Docs}
 */
export { HeartFill }
