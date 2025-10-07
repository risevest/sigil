import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm12 2H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1m-5-10v2h2v-2zm0 4v2h2v-2zm0-8v2h2V7zm-4 0v2h2V7z" />
    </Svg>
  )
})
Icon.displayName = 'CommunityFill'
/**
 * Remix Icon: Community Fill
 * @see {@link https://remixicon.com/icon/community-fill Remix Icon Docs}
 */
export const CommunityFill = Icon
