import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z" />
    </Svg>
  )
})
Icon.displayName = 'MicrosoftFill'
/**
 * Remix Icon: Microsoft Fill
 * @see {@link https://remixicon.com/icon/microsoft-fill Remix Icon Docs}
 */
export const MicrosoftFill = Icon
