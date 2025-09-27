import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078 13 11.423v8.687l6.5-3.763V7.653L12 3.311zM4.5 8.813v7.534L11 20.11v-7.533z" />
    </Svg>
  )
})
Icon.displayName = 'Box1Line'
/**
 * Remix Icon: Box 1 Line
 * @see {@link https://remixicon.com/icon/box-1-line Remix Icon Docs}
 */
export const Box1Line = Icon
