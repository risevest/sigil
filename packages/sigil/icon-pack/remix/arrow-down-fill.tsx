import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 12h7l-8 8-8-8h7V4h2z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownFill'
/**
 * Remix Icon: Arrow Down Fill
 * @see {@link https://remixicon.com/icon/arrow-down-fill Remix Icon Docs}
 */
export const ArrowDownFill = Icon
