import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10 15.17 9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414z" />
    </Svg>
  )
})
Icon.displayName = 'CheckLine'
/**
 * Remix Icon: Check Line
 * @see {@link https://remixicon.com/icon/check-line Remix Icon Docs}
 */
export const CheckLine = Icon
