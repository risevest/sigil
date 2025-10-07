import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 21V3h2v18zm4-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM8 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
Icon.displayName = 'AlignItemLeftFill'
/**
 * Remix Icon: Align Item Left Fill
 * @see {@link https://remixicon.com/icon/align-item-left-fill Remix Icon Docs}
 */
export const AlignItemLeftFill = Icon
