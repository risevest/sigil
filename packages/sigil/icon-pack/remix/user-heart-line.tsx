import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.841 15.659.176.177.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6a6 6 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a6 6 0 0 1 5.775-5.996zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4" />
    </Svg>
  )
})
Icon.displayName = 'UserHeartLine'
/**
 * Remix Icon: User Heart Line
 * @see {@link https://remixicon.com/icon/user-heart-line Remix Icon Docs}
 */
export const UserHeartLine = Icon
