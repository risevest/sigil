import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SaveFill = /* @__PURE__ */ memo(function SaveFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 21v-8H6v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1zm-2 0H8v-6h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Save Fill
 * @see {@link https://remixicon.com/icon/save-fill Remix Icon Docs}
 */
export { SaveFill }
