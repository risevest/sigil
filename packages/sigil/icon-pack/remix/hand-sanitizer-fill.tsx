import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 2v2l-4-.001V6h3v2a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-4 10h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    </Svg>
  )
})
Icon.displayName = 'HandSanitizerFill'
/**
 * Remix Icon: Hand Sanitizer Fill
 * @see {@link https://remixicon.com/icon/hand-sanitizer-fill Remix Icon Docs}
 */
export const HandSanitizerFill = Icon
