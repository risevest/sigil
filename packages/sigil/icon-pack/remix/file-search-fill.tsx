import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileSearchFill = /* @__PURE__ */ memo(function FileSearchFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-2.471 12.446 2.21 2.21 1.415-1.413-2.21-2.21a4.001 4.001 0 0 0-6.276-4.861 4 4 0 0 0 4.861 6.274m-.618-2.032a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828" />
    </Svg>
  )
})
/**
 * Remix Icon: File Search Fill
 * @see {@link https://remixicon.com/icon/file-search-fill Remix Icon Docs}
 */
export { FileSearchFill }
