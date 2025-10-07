import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.82-4.924a7 7 0 1 0-1.853 1.266l-.974-1.755A5 5 0 1 1 17 12h-3z" />
    </Svg>
  )
})
Icon.displayName = 'RestartFill'
/**
 * Remix Icon: Restart Fill
 * @see {@link https://remixicon.com/icon/restart-fill Remix Icon Docs}
 */
export const RestartFill = Icon
