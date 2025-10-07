import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m14 5 7 7-7 7v-6H8v-2h6zM4 19V5h2v14z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandRightFill'
/**
 * Remix Icon: Expand Right Fill
 * @see {@link https://remixicon.com/icon/expand-right-fill Remix Icon Docs}
 */
export const ExpandRightFill = Icon
