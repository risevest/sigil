import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'TornadoLine'
/**
 * Remix Icon: Tornado Line
 * @see {@link https://remixicon.com/icon/tornado-line Remix Icon Docs}
 */
export const TornadoLine = Icon
