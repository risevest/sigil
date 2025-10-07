import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 5v6h6v2h-6v6l-7-7zm8 14V5h2v14z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandLeftFill'
/**
 * Remix Icon: Expand Left Fill
 * @see {@link https://remixicon.com/icon/expand-left-fill Remix Icon Docs}
 */
export const ExpandLeftFill = Icon
