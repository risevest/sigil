import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.222 18.364 1.414 1.414 9.607-9.606L19.07 14V4.929H10l3.828 3.828z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightUpLongFill'
/**
 * Remix Icon: Arrow Right Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-up-long-fill Remix Icon Docs}
 */
export const ArrowRightUpLongFill = Icon
