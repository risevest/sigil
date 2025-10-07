import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m8 11.333 10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0z" />
    </Svg>
  )
})
Icon.displayName = 'SkipBackFill'
/**
 * Remix Icon: Skip Back Fill
 * @see {@link https://remixicon.com/icon/skip-back-fill Remix Icon Docs}
 */
export const SkipBackFill = Icon
