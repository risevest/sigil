import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 19.164 6.207-6.207-1.414-1.414L12 16.336l-4.793-4.793-1.414 1.414zm0-5.65 6.207-6.207-1.414-1.414L12 10.686 7.207 5.893 5.793 7.307z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownDoubleFill'
/**
 * Remix Icon: Arrow Down Double Fill
 * @see {@link https://remixicon.com/icon/arrow-down-double-fill Remix Icon Docs}
 */
export const ArrowDownDoubleFill = Icon
