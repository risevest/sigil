import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EditBoxFill = /* @__PURE__ */ memo(function EditBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.757 2.997-7.466 7.466.008 4.247 4.238-.008L21 7.24v12.758a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm3.728-.9L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
    </Svg>
  )
})
/**
 * Remix Icon: Edit Box Fill
 * @see {@link https://remixicon.com/icon/edit-box-fill Remix Icon Docs}
 */
export { EditBoxFill }
