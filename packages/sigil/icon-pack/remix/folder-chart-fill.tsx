import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderChartFill = /* @__PURE__ */ memo(function FolderChartFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 9v8h2V9zm4 3v5h2v-5zm-8 2v3h2v-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Chart Fill
 * @see {@link https://remixicon.com/icon/folder-chart-fill Remix Icon Docs}
 */
export { FolderChartFill }
