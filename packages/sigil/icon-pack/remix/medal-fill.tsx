import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 3.5-1.322 2.68-2.958.43 2.14 2.085-.505 2.946L12 17.25l2.645 1.39-.505-2.945 2.14-2.086-2.958-.43zm1-8.501L18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.05zm-2 0v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z" />
    </Svg>
  )
})
Icon.displayName = 'MedalFill'
/**
 * Remix Icon: Medal Fill
 * @see {@link https://remixicon.com/icon/medal-fill Remix Icon Docs}
 */
export const MedalFill = Icon
