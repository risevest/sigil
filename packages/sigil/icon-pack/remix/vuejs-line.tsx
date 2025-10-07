import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.317 3 12 18l8.684-15h2.316l-11 19-11-19zm4.342 0L12 10.5 16.343 3h2.316L12 14.5 5.343 3z" />
    </Svg>
  )
})
Icon.displayName = 'VuejsLine'
/**
 * Remix Icon: Vuejs Line
 * @see {@link https://remixicon.com/icon/vuejs-line Remix Icon Docs}
 */
export const VuejsLine = Icon
