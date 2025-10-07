import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10zm4.803 1A12.04 12.04 0 0 1 12 18.197 12.04 12.04 0 0 1 18.197 12 12.04 12.04 0 0 1 12 5.803 12.04 12.04 0 0 1 5.803 12" />
    </Svg>
  )
})
Icon.displayName = 'ShiningLine'
/**
 * Remix Icon: Shining Line
 * @see {@link https://remixicon.com/icon/shining-line Remix Icon Docs}
 */
export const ShiningLine = Icon
