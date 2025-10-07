import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 15.968 4.247 2.377-.948-4.773 3.573-3.305-4.833-.573-2.038-4.419zm0 2.292-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928z" />
    </Svg>
  )
})
Icon.displayName = 'StarHalfFill'
/**
 * Remix Icon: Star Half Fill
 * @see {@link https://remixicon.com/icon/star-half-fill Remix Icon Docs}
 */
export const StarHalfFill = Icon
