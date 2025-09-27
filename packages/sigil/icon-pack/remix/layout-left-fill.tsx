import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9V3zM7 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4z" />
    </Svg>
  )
})
Icon.displayName = 'LayoutLeftFill'
/**
 * Remix Icon: Layout Left Fill
 * @see {@link https://remixicon.com/icon/layout-left-fill Remix Icon Docs}
 */
export const LayoutLeftFill = Icon
