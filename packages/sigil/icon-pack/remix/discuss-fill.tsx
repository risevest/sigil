import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.8 19 14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1" />
    </Svg>
  )
})
Icon.displayName = 'DiscussFill'
/**
 * Remix Icon: Discuss Fill
 * @see {@link https://remixicon.com/icon/discuss-fill Remix Icon Docs}
 */
export const DiscussFill = Icon
