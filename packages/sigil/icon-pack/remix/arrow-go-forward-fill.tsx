import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowGoForwardFill'
/**
 * Remix Icon: Arrow Go Forward Fill
 * @see {@link https://remixicon.com/icon/arrow-go-forward-fill Remix Icon Docs}
 */
export const ArrowGoForwardFill = Icon
