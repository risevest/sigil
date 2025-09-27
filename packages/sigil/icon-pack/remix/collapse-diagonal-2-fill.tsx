import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.5 11H11V3.5L7.957 6.543l-3.25-3.25-1.414 1.414 3.25 3.25zm17 2H13v7.5l3.043-3.043 3.25 3.25 1.414-1.414-3.25-3.25z" />
    </Svg>
  )
})
Icon.displayName = 'CollapseDiagonal2Fill'
/**
 * Remix Icon: Collapse Diagonal 2 Fill
 * @see {@link https://remixicon.com/icon/collapse-diagonal-2-fill Remix Icon Docs}
 */
export const CollapseDiagonal2Fill = Icon
