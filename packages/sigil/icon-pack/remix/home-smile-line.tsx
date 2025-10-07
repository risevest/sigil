import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 19h12V9.157l-6-5.454-6 5.454zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M7.5 13h2a2.5 2.5 0 0 0 5 0h2a4.5 4.5 0 1 1-9 0" />
    </Svg>
  )
})
Icon.displayName = 'HomeSmileLine'
/**
 * Remix Icon: Home Smile Line
 * @see {@link https://remixicon.com/icon/home-smile-line Remix Icon Docs}
 */
export const HomeSmileLine = Icon
