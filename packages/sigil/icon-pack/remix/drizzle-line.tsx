import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18zm-8-2h2v4H9zm4 3h2v4h-2z" />
    </Svg>
  )
})
Icon.displayName = 'DrizzleLine'
/**
 * Remix Icon: Drizzle Line
 * @see {@link https://remixicon.com/icon/drizzle-line Remix Icon Docs}
 */
export const DrizzleLine = Icon
