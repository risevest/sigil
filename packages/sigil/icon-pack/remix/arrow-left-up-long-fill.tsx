import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18.364 19.778 1.414-1.414-9.606-9.607L14 4.93H4.929V14l3.828-3.828z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftUpLongFill'
/**
 * Remix Icon: Arrow Left Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-long-fill Remix Icon Docs}
 */
export const ArrowLeftUpLongFill = Icon
