import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.737 13h8.526L12 6.606zm4.679-9.376 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0M5 17h14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2" />
    </Svg>
  )
})
Icon.displayName = 'EjectLine'
/**
 * Remix Icon: Eject Line
 * @see {@link https://remixicon.com/icon/eject-line Remix Icon Docs}
 */
export const EjectLine = Icon
