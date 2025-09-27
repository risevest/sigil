import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3 4h2v8H9v2h6v-2h-2V8H9z" />
    </Svg>
  )
})
Icon.displayName = 'InfoI'
/**
 * Remix Icon: Info I
 * @see {@link https://remixicon.com/icon/info-i Remix Icon Docs}
 */
export const InfoI = Icon
