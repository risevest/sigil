import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileMarkedFill = /* @__PURE__ */ memo(function FileMarkedFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992M7 4v9l3.5-2 3.5 2V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Marked Fill
 * @see {@link https://remixicon.com/icon/file-marked-fill Remix Icon Docs}
 */
export { FileMarkedFill }
