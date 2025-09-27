import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 7h10V4H7zm0 2v9h10v-9z" />
    </Svg>
  )
})
Icon.displayName = 'CellphoneLine'
/**
 * Remix Icon: Cellphone Line
 * @see {@link https://remixicon.com/icon/cellphone-line Remix Icon Docs}
 */
export const CellphoneLine = Icon
