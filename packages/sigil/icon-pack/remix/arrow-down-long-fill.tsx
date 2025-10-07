import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 2h-2v13.586H5.586L12 22l6.414-6.414H13z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownLongFill'
/**
 * Remix Icon: Arrow Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-down-long-fill Remix Icon Docs}
 */
export const ArrowDownLongFill = Icon
