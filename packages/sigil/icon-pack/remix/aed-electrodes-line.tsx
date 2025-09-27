import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1h-5v2H9v-2H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm12 11V5H9v2h7a1 1 0 0 1 1 1v7zM5 9v10h10V9z" />
    </Svg>
  )
})
Icon.displayName = 'AedElectrodesLine'
/**
 * Remix Icon: Aed Electrodes Line
 * @see {@link https://remixicon.com/icon/aed-electrodes-line Remix Icon Docs}
 */
export const AedElectrodesLine = Icon
