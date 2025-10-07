import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 .5 4.95 4.95L13 5.447V10h-2V5.448l-3.948-.001zM11 14v4.55H7.05L12 23.5l4.95-4.95H13V14z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandVerticalFill'
/**
 * Remix Icon: Expand Vertical Fill
 * @see {@link https://remixicon.com/icon/expand-vertical-fill Remix Icon Docs}
 */
export const ExpandVerticalFill = Icon
