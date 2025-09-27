import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 7v13H9V7H3V5h12v2zm8.55-.42a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 6c0 .573-.24 1.09-.626 1.454L18.744 9H21v1h-4V9z" />
    </Svg>
  )
})
Icon.displayName = 'Superscript2'
/**
 * Remix Icon: Superscript 2
 * @see {@link https://remixicon.com/icon/superscript-2 Remix Icon Docs}
 */
export const Superscript2 = Icon
