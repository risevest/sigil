import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 4h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-6.5 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 6v3h3V6zM3 4h7v7H3z" />
    </Svg>
  )
})
Icon.displayName = 'ListIndefinite'
/**
 * Remix Icon: List Indefinite
 * @see {@link https://remixicon.com/icon/list-indefinite Remix Icon Docs}
 */
export const ListIndefinite = Icon
