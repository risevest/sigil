import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 6a2 2 0 0 0-1 3.732V15h2l.001-4.268A2 2 0 0 0 12 7" />
    </Svg>
  )
})
Icon.displayName = 'ShieldKeyholeFill'
/**
 * Remix Icon: Shield Keyhole Fill
 * @see {@link https://remixicon.com/icon/shield-keyhole-fill Remix Icon Docs}
 */
export const ShieldKeyholeFill = Icon
