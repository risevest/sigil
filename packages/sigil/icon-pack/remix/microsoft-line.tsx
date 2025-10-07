import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.001 5h-6v6h6zm2 0v6h6V5zm6 8h-6v6h6zm-8 6v-6h-6v6zm-8-16h18v18h-18z" />
    </Svg>
  )
})
Icon.displayName = 'MicrosoftLine'
/**
 * Remix Icon: Microsoft Line
 * @see {@link https://remixicon.com/icon/microsoft-line Remix Icon Docs}
 */
export const MicrosoftLine = Icon
