import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Folder6Line = /* @__PURE__ */ memo(function Folder6Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3c-.55 0-1-.45-1-1zm8.586 2-1-1H4v2h5.586zM4 9v10h16V7h-7.586l-2 2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder 6 Line
 * @see {@link https://remixicon.com/icon/folder-6-line Remix Icon Docs}
 */
export { Folder6Line }
