import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 14.118-2.317 2.316a4 4 0 1 1-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 0 1 0-2.828l.708-.707L12 9.875l7.081-7.081.708.707a2 2 0 0 1 0 2.828l-5.668 5.668 2.317 2.316a4 4 0 1 1-2.121 2.121zm-6 5.879a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
Icon.displayName = 'Scissors2Fill'
/**
 * Remix Icon: Scissors 2 Fill
 * @see {@link https://remixicon.com/icon/scissors-2-fill Remix Icon Docs}
 */
export const Scissors2Fill = Icon
