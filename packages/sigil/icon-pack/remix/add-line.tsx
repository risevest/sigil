import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AddLine = /* @__PURE__ */ memo(function AddLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Add Line
 * @see {@link https://remixicon.com/icon/add-line Remix Icon Docs}
 */
export { AddLine }
