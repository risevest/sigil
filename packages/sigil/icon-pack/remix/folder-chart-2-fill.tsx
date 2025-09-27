import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM12 9a4 4 0 1 0 4 4h-4z" />
    </Svg>
  )
})
Icon.displayName = 'FolderChart2Fill'
/**
 * Remix Icon: Folder Chart 2 Fill
 * @see {@link https://remixicon.com/icon/folder-chart-2-fill Remix Icon Docs}
 */
export const FolderChart2Fill = Icon
