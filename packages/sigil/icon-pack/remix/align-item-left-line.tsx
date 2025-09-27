import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 21V3h2v18zm6-6h6v3H9zm-1-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm1-4h10V6H9zM7 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
    </Svg>
  )
})
Icon.displayName = 'AlignItemLeftLine'
/**
 * Remix Icon: Align Item Left Line
 * @see {@link https://remixicon.com/icon/align-item-left-line Remix Icon Docs}
 */
export const AlignItemLeftLine = Icon
