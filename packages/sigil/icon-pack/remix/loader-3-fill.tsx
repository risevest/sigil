import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0m0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11z" />
    </Svg>
  )
})
Icon.displayName = 'Loader3Fill'
/**
 * Remix Icon: Loader 3 Fill
 * @see {@link https://remixicon.com/icon/loader-3-fill Remix Icon Docs}
 */
export const Loader3Fill = Icon
