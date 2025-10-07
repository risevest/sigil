import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 14.656-5.95-5.95H11V6.342h2v5.364h4.95z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownBoxFill'
/**
 * Remix Icon: Arrow Down Box Fill
 * @see {@link https://remixicon.com/icon/arrow-down-box-fill Remix Icon Docs}
 */
export const ArrowDownBoxFill = Icon
