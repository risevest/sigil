import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 18v3H9v-3a8 8 0 1 1 7.458-10.901A5.5 5.5 0 1 1 17.5 18zm2 2h2v3h-2z" />
    </Svg>
  )
})
Icon.displayName = 'DrizzleFill'
/**
 * Remix Icon: Drizzle Fill
 * @see {@link https://remixicon.com/icon/drizzle-fill Remix Icon Docs}
 */
export const DrizzleFill = Icon
