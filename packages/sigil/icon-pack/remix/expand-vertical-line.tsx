import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 .5 4.95 4.95-1.415 1.413-2.536-2.535V10h-2V4.328L8.467 6.86 7.052 5.447zM11 14v5.67l-2.536-2.535L7.05 18.55 12 23.5l4.95-4.95-1.414-1.414L13 19.672v-5.673z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandVerticalLine'
/**
 * Remix Icon: Expand Vertical Line
 * @see {@link https://remixicon.com/icon/expand-vertical-line Remix Icon Docs}
 */
export const ExpandVerticalLine = Icon
