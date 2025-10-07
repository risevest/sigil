import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zm-8-2h14V4H5zm5-9 5 3.5-5 3.5z" />
    </Svg>
  )
})
Icon.displayName = 'Slideshow2Line'
/**
 * Remix Icon: Slideshow 2 Line
 * @see {@link https://remixicon.com/icon/slideshow-2-line Remix Icon Docs}
 */
export const Slideshow2Line = Icon
