import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 5h8.414l-3.5 3.5 3.793 3.793-1.414 1.414-3.793-3.793-3.5 3.5z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftUpBoxFill'
/**
 * Remix Icon: Arrow Left Up Box Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-box-fill Remix Icon Docs}
 */
export const ArrowLeftUpBoxFill = Icon
