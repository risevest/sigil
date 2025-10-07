import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 11v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm0-2H2V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
Icon.displayName = 'Folder2Fill'
/**
 * Remix Icon: Folder 2 Fill
 * @see {@link https://remixicon.com/icon/folder-2-fill Remix Icon Docs}
 */
export const Folder2Fill = Icon
