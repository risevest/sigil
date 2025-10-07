import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z" />
    </Svg>
  )
})
Icon.displayName = 'UnsplashFill'
/**
 * Remix Icon: Unsplash Fill
 * @see {@link https://remixicon.com/icon/unsplash-fill Remix Icon Docs}
 */
export const UnsplashFill = Icon
