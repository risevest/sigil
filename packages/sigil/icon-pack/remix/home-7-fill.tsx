import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    </Svg>
  )
})
Icon.displayName = 'Home7Fill'
/**
 * Remix Icon: Home 7 Fill
 * @see {@link https://remixicon.com/icon/home-7-fill Remix Icon Docs}
 */
export const Home7Fill = Icon
