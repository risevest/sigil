import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 4h-2v7h7V9h-3.586l4.293-4.293-1.414-1.414L15 7.586zM4 15h3.586l-4.293 4.293 1.414 1.414L9 16.414V20h2v-7H4z" />
    </Svg>
  )
})
Icon.displayName = 'CollapseDiagonalLine'
/**
 * Remix Icon: Collapse Diagonal Line
 * @see {@link https://remixicon.com/icon/collapse-diagonal-line Remix Icon Docs}
 */
export const CollapseDiagonalLine = Icon
