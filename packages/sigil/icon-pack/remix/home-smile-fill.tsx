import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 0 1-5 0z" />
    </Svg>
  )
})
Icon.displayName = 'HomeSmileFill'
/**
 * Remix Icon: Home Smile Fill
 * @see {@link https://remixicon.com/icon/home-smile-fill Remix Icon Docs}
 */
export const HomeSmileFill = Icon
