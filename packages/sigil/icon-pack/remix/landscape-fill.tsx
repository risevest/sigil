import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 21-4.762-8.73L15 6l8 15zM8 10l6 11H2zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
    </Svg>
  )
})
Icon.displayName = 'LandscapeFill'
/**
 * Remix Icon: Landscape Fill
 * @see {@link https://remixicon.com/icon/landscape-fill Remix Icon Docs}
 */
export const LandscapeFill = Icon
