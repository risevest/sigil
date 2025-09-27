import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0M9 16.5a2.5 2.5 0 0 0-5 0V19h5zm2 4.5H2v-4.5a4.5 4.5 0 1 1 9 0zm8.5-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0m6.5 9.5a2.5 2.5 0 0 0-5 0V19h5zM13 19v-2.5a4.5 4.5 0 1 1 9 0V21h-9z" />
    </Svg>
  )
})
Icon.displayName = 'Group3Line'
/**
 * Remix Icon: Group 3 Line
 * @see {@link https://remixicon.com/icon/group-3-line Remix Icon Docs}
 */
export const Group3Line = Icon
