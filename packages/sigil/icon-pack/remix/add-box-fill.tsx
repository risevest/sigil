import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 8H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
    </Svg>
  )
})
Icon.displayName = 'AddBoxFill'
/**
 * Remix Icon: Add Box Fill
 * @see {@link https://remixicon.com/icon/add-box-fill Remix Icon Docs}
 */
export const AddBoxFill = Icon
