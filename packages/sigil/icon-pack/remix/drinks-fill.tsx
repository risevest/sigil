import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 2H6.205a1.25 1.25 0 0 0-1.226 1.005L4.18 7H2v2h20V7h-2.18l-.8-3.995A1.25 1.25 0 0 0 17.796 2H16V0h-2zm5.66 9H4.34l1.141 9.893A1.25 1.25 0 0 0 6.723 22h10.554a1.25 1.25 0 0 0 1.242-1.107z" />
    </Svg>
  )
})
Icon.displayName = 'DrinksFill'
/**
 * Remix Icon: Drinks Fill
 * @see {@link https://remixicon.com/icon/drinks-fill Remix Icon Docs}
 */
export const DrinksFill = Icon
