import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m23.413 8.792-5.392 4.986L9.71 5.467 12 .5l3.386 7.34zm-4.79 11.244 2.57 2.57 1.414-1.414L2.808 1.393 1.394 2.808l5.264 5.264-6.07.72 5.934 5.488-1.575 7.928 7.054-3.948 7.053 3.948z" />
    </Svg>
  )
})
Icon.displayName = 'StarOffFill'
/**
 * Remix Icon: Star Off Fill
 * @see {@link https://remixicon.com/icon/star-off-fill Remix Icon Docs}
 */
export const StarOffFill = Icon
