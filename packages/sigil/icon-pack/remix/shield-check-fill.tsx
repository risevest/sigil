import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm4.452 7.222-4.95 4.949-2.828-2.828-1.414 1.414L11.503 16l6.364-6.364z" />
    </Svg>
  )
})
Icon.displayName = 'ShieldCheckFill'
/**
 * Remix Icon: Shield Check Fill
 * @see {@link https://remixicon.com/icon/shield-check-fill Remix Icon Docs}
 */
export const ShieldCheckFill = Icon
