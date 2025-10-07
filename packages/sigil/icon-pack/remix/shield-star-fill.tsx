import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 13.5l2.939 1.545-.561-3.272 2.377-2.318-3.285-.478L12 6l-1.47 2.977-3.285.478 2.377 2.318-.56 3.272z" />
    </Svg>
  )
})
Icon.displayName = 'ShieldStarFill'
/**
 * Remix Icon: Shield Star Fill
 * @see {@link https://remixicon.com/icon/shield-star-fill Remix Icon Docs}
 */
export const ShieldStarFill = Icon
