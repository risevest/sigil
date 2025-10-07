import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.936 2.501 5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zM8 11.001v2h8v-2z" />
    </Svg>
  )
})
Icon.displayName = 'Spam3Fill'
/**
 * Remix Icon: Spam 3 Fill
 * @see {@link https://remixicon.com/icon/spam-3-fill Remix Icon Docs}
 */
export const Spam3Fill = Icon
