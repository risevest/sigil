import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 4h13v2H8zm-5-.5h3v3H3zm0 7h3v3H3zm0 7h3v3H3zM8 11h13v2H8zm0 7h13v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'ListCheck'
/**
 * Remix Icon: List Check
 * @see {@link https://remixicon.com/icon/list-check Remix Icon Docs}
 */
export const ListCheck = Icon
