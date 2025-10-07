import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 18V6h2v12zm4-6 6-6v12z" />
    </Svg>
  )
})
Icon.displayName = 'SkipLeftFill'
/**
 * Remix Icon: Skip Left Fill
 * @see {@link https://remixicon.com/icon/skip-left-fill Remix Icon Docs}
 */
export const SkipLeftFill = Icon
