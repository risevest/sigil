import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.936 2.501 5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565z" />
    </Svg>
  )
})
Icon.displayName = 'OctagonFill'
/**
 * Remix Icon: Octagon Fill
 * @see {@link https://remixicon.com/icon/octagon-fill Remix Icon Docs}
 */
export const OctagonFill = Icon
