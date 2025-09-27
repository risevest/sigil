import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 12a1 1 0 0 1 1 1v9H6v-9a1 1 0 0 1 1-1zm-7 2H8v2h2zm2-8a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2" />
    </Svg>
  )
})
Icon.displayName = 'RemoteControlFill'
/**
 * Remix Icon: Remote Control Fill
 * @see {@link https://remixicon.com/icon/remote-control-fill Remix Icon Docs}
 */
export const RemoteControlFill = Icon
