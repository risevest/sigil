import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PercentFill = /* @__PURE__ */ memo(function PercentFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.505 21.003a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m12.571-6.486 1.414 1.415L4.934 20.488 3.52 19.074z" />
    </Svg>
  )
})
/**
 * Remix Icon: Percent Fill
 * @see {@link https://remixicon.com/icon/percent-fill Remix Icon Docs}
 */
export { PercentFill }
