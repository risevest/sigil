import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3.001 5.479 7.377-1.016v7.127H3zm0 13.042 7.377 1.017v-7.04H3zm8.188 1.125L21.001 21v-8.502h-9.812zm0-15.292v7.236h9.812V3z" />
    </Svg>
  )
})
Icon.displayName = 'WindowsFill'
/**
 * Remix Icon: Windows Fill
 * @see {@link https://remixicon.com/icon/windows-fill Remix Icon Docs}
 */
export const WindowsFill = Icon
