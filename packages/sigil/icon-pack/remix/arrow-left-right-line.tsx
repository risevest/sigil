import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.05 12.05 21 17l-4.95 4.95-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535zm-8.1-10 1.414 1.414-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95 3 7z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftRightLine'
/**
 * Remix Icon: Arrow Left Right Line
 * @see {@link https://remixicon.com/icon/arrow-left-right-line Remix Icon Docs}
 */
export const ArrowLeftRightLine = Icon
