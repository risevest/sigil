import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1m-9.586-3H2V4a1 1 0 0 1 1-1h7.414z" />
    </Svg>
  )
})
Icon.displayName = 'Folder3Fill'
/**
 * Remix Icon: Folder 3 Fill
 * @see {@link https://remixicon.com/icon/folder-3-fill Remix Icon Docs}
 */
export const Folder3Fill = Icon
