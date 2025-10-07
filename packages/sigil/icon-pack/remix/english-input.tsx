import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.174-2.5-2.5-2.5S16 13.07 16 14.5V20h-2zm-2-6v2H4v5h8v2H4v5h8v2H2V4z" />
    </Svg>
  )
})
Icon.displayName = 'EnglishInput'
/**
 * Remix Icon: English Input
 * @see {@link https://remixicon.com/icon/english-input Remix Icon Docs}
 */
export const EnglishInput = Icon
