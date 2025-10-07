import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.364 5.636 16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364" />
    </Svg>
  )
})
Icon.displayName = 'Loader4Fill'
/**
 * Remix Icon: Loader 4 Fill
 * @see {@link https://remixicon.com/icon/loader-4-fill Remix Icon Docs}
 */
export const Loader4Fill = Icon
