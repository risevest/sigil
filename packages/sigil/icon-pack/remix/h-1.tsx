import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8z" />
    </Svg>
  )
})
Icon.displayName = 'H1'
/**
 * Remix Icon: H 1
 * @see {@link https://remixicon.com/icon/h-1 Remix Icon Docs}
 */
export const H1 = Icon
