import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 13v7l-8-8 8-8v7h8v2z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftFill'
/**
 * Remix Icon: Arrow Left Fill
 * @see {@link https://remixicon.com/icon/arrow-left-fill Remix Icon Docs}
 */
export const ArrowLeftFill = Icon
