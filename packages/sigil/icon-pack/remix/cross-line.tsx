import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5zm2 2v5H6v2h5v9h2v-9h5V9h-5V4z" />
    </Svg>
  )
})
Icon.displayName = 'CrossLine'
/**
 * Remix Icon: Cross Line
 * @see {@link https://remixicon.com/icon/cross-line Remix Icon Docs}
 */
export const CrossLine = Icon
