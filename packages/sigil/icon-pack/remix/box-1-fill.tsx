import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L13 22.421V11.423l-9.502-5.5zM2.5 7.656V17.5l8.5 4.921v-9.844z" />
    </Svg>
  )
})
Icon.displayName = 'Box1Fill'
/**
 * Remix Icon: Box 1 Fill
 * @see {@link https://remixicon.com/icon/box-1-fill Remix Icon Docs}
 */
export const Box1Fill = Icon
