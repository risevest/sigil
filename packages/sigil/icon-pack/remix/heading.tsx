import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
    </Svg>
  )
})
Icon.displayName = 'Heading'
/**
 * Remix Icon: Heading
 * @see {@link https://remixicon.com/icon/heading Remix Icon Docs}
 */
export const Heading = Icon
