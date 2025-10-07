import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3a1 1 0 0 0-1 1v3h7.586L12 4.586 10.414 3zm11.414 2-4 4H2v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
Icon.displayName = 'Folder6Fill'
/**
 * Remix Icon: Folder 6 Fill
 * @see {@link https://remixicon.com/icon/folder-6-fill Remix Icon Docs}
 */
export const Folder6Fill = Icon
