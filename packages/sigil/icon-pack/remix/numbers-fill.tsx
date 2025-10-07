import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 18H4v-8h5zm6 0h-5V6h5zm6 0h-5V2h5zm1 4H3v-2h19z" />
    </Svg>
  )
})
Icon.displayName = 'NumbersFill'
/**
 * Remix Icon: Numbers Fill
 * @see {@link https://remixicon.com/icon/numbers-fill Remix Icon Docs}
 */
export const NumbersFill = Icon
