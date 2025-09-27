import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.36 13.052 4.95 4.95H5.998V6.687l4.95 4.95 5.656-5.658 1.415 1.415z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftDownFill'
/**
 * Remix Icon: Arrow Left Down Fill
 * @see {@link https://remixicon.com/icon/arrow-left-down-fill Remix Icon Docs}
 */
export const ArrowLeftDownFill = Icon
