import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GenderlessFill = /* @__PURE__ */ memo(function GenderlessFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 7.066V1h2v6.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934" />
    </Svg>
  )
})
/**
 * Remix Icon: Genderless Fill
 * @see {@link https://remixicon.com/icon/genderless-fill Remix Icon Docs}
 */
export { GenderlessFill }
