import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.998 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 0 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6h-9v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0zM19.936 11A8.001 8.001 0 0 0 4.06 11z" />
    </Svg>
  )
})
Icon.displayName = 'UmbrellaLine'
/**
 * Remix Icon: Umbrella Line
 * @see {@link https://remixicon.com/icon/umbrella-line Remix Icon Docs}
 */
export const UmbrellaLine = Icon
