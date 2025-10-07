import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 9h-2V6H5V4h14v2h-6zm0 6v5h-2v-5zM3 11h18v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'Strikethrough2'
/**
 * Remix Icon: Strikethrough 2
 * @see {@link https://remixicon.com/icon/strikethrough-2 Remix Icon Docs}
 */
export const Strikethrough2 = Icon
