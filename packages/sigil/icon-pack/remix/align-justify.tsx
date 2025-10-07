import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 15h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'AlignJustify'
/**
 * Remix Icon: Align Justify
 * @see {@link https://remixicon.com/icon/align-justify Remix Icon Docs}
 */
export const AlignJustify = Icon
