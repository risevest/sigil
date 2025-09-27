import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 10.111V1l11 6v14H3V7z" />
    </Svg>
  )
})
Icon.displayName = 'Building3Fill'
/**
 * Remix Icon: Building 3 Fill
 * @see {@link https://remixicon.com/icon/building-3-fill Remix Icon Docs}
 */
export const Building3Fill = Icon
