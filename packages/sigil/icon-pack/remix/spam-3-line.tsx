import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.936 2.501 5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894zM8 11.001h8v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'Spam3Line'
/**
 * Remix Icon: Spam 3 Line
 * @see {@link https://remixicon.com/icon/spam-3-line Remix Icon Docs}
 */
export const Spam3Line = Icon
