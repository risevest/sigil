import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KnifeBloodFill = /* @__PURE__ */ memo(function KnifeBloodFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-4.12-4.12V19a1 1 0 1 1-2 0v-4a1 1 0 0 0-1.993-.117L4.001 15v1a1 1 0 1 1-2 0V7.214A7.98 7.98 0 0 1 4.17 1.587z" />
    </Svg>
  )
})
/**
 * Remix Icon: Knife Blood Fill
 * @see {@link https://remixicon.com/icon/knife-blood-fill Remix Icon Docs}
 */
export { KnifeBloodFill }
