import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 22C7.477 22 3 17.523 3 12S7.477 2 13 2s10 4.477 10 10-4.477 10-10 10M8 11.5l4 1.5 1.5 4.002L17 8z" />
    </Svg>
  )
})
Icon.displayName = 'CompassDiscoverFill'
/**
 * Remix Icon: Compass Discover Fill
 * @see {@link https://remixicon.com/icon/compass-discover-fill Remix Icon Docs}
 */
export const CompassDiscoverFill = Icon
