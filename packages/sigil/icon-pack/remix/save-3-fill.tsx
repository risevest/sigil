import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Save3Fill = /* @__PURE__ */ memo(function Save3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 1v5h9V4zm-1 8v7h12v-7zm7-7h2v3h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Save 3 Fill
 * @see {@link https://remixicon.com/icon/save-3-fill Remix Icon Docs}
 */
export { Save3Fill }
