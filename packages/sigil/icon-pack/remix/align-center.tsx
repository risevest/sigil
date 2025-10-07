import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm2 15h14v2H5zm-2-5h18v2H3zm2-5h14v2H5z" />
    </Svg>
  )
})
Icon.displayName = 'AlignCenter'
/**
 * Remix Icon: Align Center
 * @see {@link https://remixicon.com/icon/align-center Remix Icon Docs}
 */
export const AlignCenter = Icon
