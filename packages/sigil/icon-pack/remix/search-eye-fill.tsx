import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-5.853-9.44a4 4 0 1 0 2.646 2.646 2 2 0 1 1-2.646-2.647" />
    </Svg>
  )
})
Icon.displayName = 'SearchEyeFill'
/**
 * Remix Icon: Search Eye Fill
 * @see {@link https://remixicon.com/icon/search-eye-fill Remix Icon Docs}
 */
export const SearchEyeFill = Icon
