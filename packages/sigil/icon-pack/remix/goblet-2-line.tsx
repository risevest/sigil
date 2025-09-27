import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.133 2 5.011 9.859c-.303 2.114.521 3.93 1.88 5.188 1.105 1.022 2.568 1.685 4.11 1.887V20H6v2h12v-2h-5v-3.066c1.54-.202 3.004-.865 4.109-1.888 1.359-1.257 2.182-3.073 1.88-5.187L17.868 2zm.857 8.141L7.868 4h8.265l.878 6.141c.198 1.386-.322 2.57-1.26 3.438-.954.883-2.333 1.421-3.75 1.421-1.418 0-2.797-.538-3.752-1.421-.937-.868-1.457-2.052-1.259-3.438" />
    </Svg>
  )
})
Icon.displayName = 'Goblet2Line'
/**
 * Remix Icon: Goblet 2 Line
 * @see {@link https://remixicon.com/icon/goblet-2-line Remix Icon Docs}
 */
export const Goblet2Line = Icon
