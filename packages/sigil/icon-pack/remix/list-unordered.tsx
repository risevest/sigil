import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'ListUnordered'
/**
 * Remix Icon: List Unordered
 * @see {@link https://remixicon.com/icon/list-unordered Remix Icon Docs}
 */
export const ListUnordered = Icon
