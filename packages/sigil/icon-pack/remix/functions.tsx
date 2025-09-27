import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5 18 7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5z" />
    </Svg>
  )
})
Icon.displayName = 'Functions'
/**
 * Remix Icon: Functions
 * @see {@link https://remixicon.com/icon/functions Remix Icon Docs}
 */
export const Functions = Icon
