import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileAddFill = /* @__PURE__ */ memo(function FileAddFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 9H8v2h3v3h2v-3h3v-2h-3V8h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Add Fill
 * @see {@link https://remixicon.com/icon/file-add-fill Remix Icon Docs}
 */
export { FileAddFill }
