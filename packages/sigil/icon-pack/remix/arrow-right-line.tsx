import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightLine'
/**
 * Remix Icon: Arrow Right Line
 * @see {@link https://remixicon.com/icon/arrow-right-line Remix Icon Docs}
 */
export const ArrowRightLine = Icon
