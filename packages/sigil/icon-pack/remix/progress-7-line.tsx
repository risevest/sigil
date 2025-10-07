import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m18 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0A6 6 0 1 1 7.757 7.757L12 12V6a6 6 0 0 1 6 6" />
    </Svg>
  )
})
Icon.displayName = 'Progress7Line'
/**
 * Remix Icon: Progress 7 Line
 * @see {@link https://remixicon.com/icon/progress-7-line Remix Icon Docs}
 */
export const Progress7Line = Icon
