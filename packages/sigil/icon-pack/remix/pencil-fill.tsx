import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PencilFill = /* @__PURE__ */ memo(function PencilFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.9 6.855 4.242 4.242-9.9 9.9H3v-4.243zm1.414-1.415 2.121-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pencil Fill
 * @see {@link https://remixicon.com/icon/pencil-fill Remix Icon Docs}
 */
export { PencilFill }
