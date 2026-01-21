import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileImageFill = /* @__PURE__ */ memo(function FileImageFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21 7-5-5H3.993A.993.993 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014a.993.993 0 0 0 .993-.992zM11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 7.5H8l5.5-7z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Image Fill
 * @see {@link https://remixicon.com/icon/file-image-fill Remix Icon Docs}
 */
export { FileImageFill }
