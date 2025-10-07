import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 1.5a5.5 5.5 0 0 1 3.352 9.86C17.24 12.41 18.5 14.32 18.5 16.5c0 3.314-2.91 6-6.5 6s-6.5-2.686-6.5-6c0-2.181 1.261-4.09 3.147-5.141A5.5 5.5 0 0 1 12 1.5m0 11c-2.52 0-4.5 1.828-4.5 4s1.98 4 4.5 4 4.5-1.828 4.5-4-1.98-4-4.5-4m0-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
    </Svg>
  )
})
Icon.displayName = 'Number8'
/**
 * Remix Icon: Number 8
 * @see {@link https://remixicon.com/icon/number-8 Remix Icon Docs}
 */
export const Number8 = Icon
