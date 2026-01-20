import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EditBoxLine = /* @__PURE__ */ memo(function EditBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.757 2.997-2 2H5v14h14V9.239l2-2v12.758a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm3.728-.9L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
    </Svg>
  )
})
/**
 * Remix Icon: Edit Box Line
 * @see {@link https://remixicon.com/icon/edit-box-line Remix Icon Docs}
 */
export { EditBoxLine }
