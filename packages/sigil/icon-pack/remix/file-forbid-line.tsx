import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileForbidLine = /* @__PURE__ */ memo(function FileForbidLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.29 20c.215.722.543 1.396.965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a7 7 0 0 0-2-.603V8h-4V4H5v16zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001" />
    </Svg>
  )
})
/**
 * Remix Icon: File Forbid Line
 * @see {@link https://remixicon.com/icon/file-forbid-line Remix Icon Docs}
 */
export { FileForbidLine }
