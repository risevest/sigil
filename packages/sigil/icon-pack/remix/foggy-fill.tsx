import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.584 13.007a8 8 0 1 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908zM4 19h17v2H4zm-2-4h21v2H2z" />
    </Svg>
  )
})
Icon.displayName = 'FoggyFill'
/**
 * Remix Icon: Foggy Fill
 * @see {@link https://remixicon.com/icon/foggy-fill Remix Icon Docs}
 */
export const FoggyFill = Icon
