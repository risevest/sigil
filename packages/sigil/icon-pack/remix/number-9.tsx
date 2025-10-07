import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
    </Svg>
  )
})
Icon.displayName = 'Number9'
/**
 * Remix Icon: Number 9
 * @see {@link https://remixicon.com/icon/number-9 Remix Icon Docs}
 */
export const Number9 = Icon
