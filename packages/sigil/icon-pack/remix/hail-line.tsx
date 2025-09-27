import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 17.419A8.003 8.003 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-9 5.197zM10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
Icon.displayName = 'HailLine'
/**
 * Remix Icon: Hail Line
 * @see {@link https://remixicon.com/icon/hail-line Remix Icon Docs}
 */
export const HailLine = Icon
