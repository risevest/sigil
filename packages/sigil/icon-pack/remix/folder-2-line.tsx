import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Folder2Line = /* @__PURE__ */ memo(function Folder2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM20 11H4v8h16zm0-2V7h-8.414l-2-2H4v4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder 2 Line
 * @see {@link https://remixicon.com/icon/folder-2-line Remix Icon Docs}
 */
export { Folder2Line }
