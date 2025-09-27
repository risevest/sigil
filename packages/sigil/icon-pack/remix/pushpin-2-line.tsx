import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z" />
    </Svg>
  )
})
Icon.displayName = 'Pushpin2Line'
/**
 * Remix Icon: Pushpin 2 Line
 * @see {@link https://remixicon.com/icon/pushpin-2-line Remix Icon Docs}
 */
export const Pushpin2Line = Icon
