import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 13v-2h13.586V5.586L22 12l-6.414 6.414V13z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightLongFill'
/**
 * Remix Icon: Arrow Right Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-long-fill Remix Icon Docs}
 */
export const ArrowRightLongFill = Icon
