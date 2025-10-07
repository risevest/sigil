import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.586 7H12V5h7v7h-2V8.414L8.414 17H12v2H5v-7h2v3.586z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandDiagonalSLine'
/**
 * Remix Icon: Expand Diagonal S Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-line Remix Icon Docs}
 */
export const ExpandDiagonalSLine = Icon
