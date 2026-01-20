import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileCheckLine = /* @__PURE__ */ memo(function FileCheckLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 20v2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v7h-2V8h-4V4H5v16zm2.465-.535L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Check Line
 * @see {@link https://remixicon.com/icon/file-check-line Remix Icon Docs}
 */
export { FileCheckLine }
