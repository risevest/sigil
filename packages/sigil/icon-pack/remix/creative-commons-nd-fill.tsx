import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4 11H8v2h8zm0-4H8v2h8z" />
    </Svg>
  )
})
Icon.displayName = 'CreativeCommonsNdFill'
/**
 * Remix Icon: Creative Commons Nd Fill
 * @see {@link https://remixicon.com/icon/creative-commons-nd-fill Remix Icon Docs}
 */
export const CreativeCommonsNdFill = Icon
