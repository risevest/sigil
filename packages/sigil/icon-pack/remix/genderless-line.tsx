import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
    </Svg>
  )
})
Icon.displayName = 'GenderlessLine'
/**
 * Remix Icon: Genderless Line
 * @see {@link https://remixicon.com/icon/genderless-line Remix Icon Docs}
 */
export const GenderlessLine = Icon
