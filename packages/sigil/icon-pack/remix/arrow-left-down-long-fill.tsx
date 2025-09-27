import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.778 5.636-1.414-1.414-9.607 9.606L4.93 10v9.071H14l-3.828-3.828z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftDownLongFill'
/**
 * Remix Icon: Arrow Left Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-down-long-fill Remix Icon Docs}
 */
export const ArrowLeftDownLongFill = Icon
