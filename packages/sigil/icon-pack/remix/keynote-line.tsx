import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.44 10h15.12l-1.2-6H5.64zM13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.197.977l1.609 8.046c.108.54-.26.977-.797.977z" />
    </Svg>
  )
})
Icon.displayName = 'KeynoteLine'
/**
 * Remix Icon: Keynote Line
 * @see {@link https://remixicon.com/icon/keynote-line Remix Icon Docs}
 */
export const KeynoteLine = Icon
