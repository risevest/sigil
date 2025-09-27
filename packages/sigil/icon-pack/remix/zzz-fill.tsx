import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z" />
    </Svg>
  )
})
Icon.displayName = 'ZzzFill'
/**
 * Remix Icon: Zzz Fill
 * @see {@link https://remixicon.com/icon/zzz-fill Remix Icon Docs}
 */
export const ZzzFill = Icon
