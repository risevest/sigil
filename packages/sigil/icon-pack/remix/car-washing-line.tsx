import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V12l2.417-4.029A2 2 0 0 1 6.132 7h11.736a2 2 0 0 1 1.715.971L22 12v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-7H4v5h16zM4.332 12h15.336l-1.8-3H6.132zM5.44 3.44 6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0L17.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0M6.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
Icon.displayName = 'CarWashingLine'
/**
 * Remix Icon: Car Washing Line
 * @see {@link https://remixicon.com/icon/car-washing-line Remix Icon Docs}
 */
export const CarWashingLine = Icon
