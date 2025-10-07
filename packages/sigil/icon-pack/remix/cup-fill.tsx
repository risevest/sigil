import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1m13 2v3h2V5zM2 19h18v2H2z" />
    </Svg>
  )
})
Icon.displayName = 'CupFill'
/**
 * Remix Icon: Cup Fill
 * @see {@link https://remixicon.com/icon/cup-fill Remix Icon Docs}
 */
export const CupFill = Icon
