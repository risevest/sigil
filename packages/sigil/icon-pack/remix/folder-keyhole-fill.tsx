import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderKeyholeFill = /* @__PURE__ */ memo(function FolderKeyholeFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 9a2 2 0 0 0-1 3.732V17h2l.001-4.268A2 2 0 0 0 12 9" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Keyhole Fill
 * @see {@link https://remixicon.com/icon/folder-keyhole-fill Remix Icon Docs}
 */
export { FolderKeyholeFill }
