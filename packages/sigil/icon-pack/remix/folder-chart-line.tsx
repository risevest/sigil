import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 4h2v8h-2zm4 3h2v5h-2zm-8 2h2v3H7z" />
    </Svg>
  )
})
Icon.displayName = 'FolderChartLine'
/**
 * Remix Icon: Folder Chart Line
 * @see {@link https://remixicon.com/icon/folder-chart-line Remix Icon Docs}
 */
export const FolderChartLine = Icon
