import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1m8 11.5 2.939 1.545-.561-3.272 2.377-2.318-3.285-.478L12 6l-1.47 2.977-3.285.478 2.377 2.318-.56 3.272z" />
    </Svg>
  )
})
Icon.displayName = 'Bookmark3Fill'
/**
 * Remix Icon: Bookmark 3 Fill
 * @see {@link https://remixicon.com/icon/bookmark-3-fill Remix Icon Docs}
 */
export const Bookmark3Fill = Icon
