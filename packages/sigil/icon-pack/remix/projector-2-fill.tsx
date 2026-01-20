import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Projector2Fill = /* @__PURE__ */ memo(function Projector2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.81a6.48 6.48 0 0 1 4.69-2c1.843 0 3.508.767 4.69 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1m-5.5-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M4 13v2h2v-2zm4 0v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Projector 2 Fill
 * @see {@link https://remixicon.com/icon/projector-2-fill Remix Icon Docs}
 */
export { Projector2Fill }
