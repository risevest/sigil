import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.752 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313zM12 2a9.99 9.99 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.535 9.12L14.88 19.466A8.02 8.02 0 0 0 19.749 14H15.5v-2H22c0 4.726-3.279 8.686-7.686 9.73L2.27 9.686C3.314 5.28 7.275 2 12 2" />
    </Svg>
  )
})
Icon.displayName = 'GatsbyLine'
/**
 * Remix Icon: Gatsby Line
 * @see {@link https://remixicon.com/icon/gatsby-line Remix Icon Docs}
 */
export const GatsbyLine = Icon
