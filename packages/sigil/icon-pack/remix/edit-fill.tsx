import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EditFill = /* @__PURE__ */ memo(function EditFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Edit Fill
 * @see {@link https://remixicon.com/icon/edit-fill Remix Icon Docs}
 */
export { EditFill }
