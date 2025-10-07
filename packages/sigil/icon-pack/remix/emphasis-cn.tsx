import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M13 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.621 6.302 14.7 14.7 0 0 0 5.327 3.042l-.536 1.93A16.7 16.7 0 0 1 12 13.726 16.7 16.7 0 0 1 5.8 17.273l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042 18 18 0 0 1-2.822-4.3h2.24A16 16 0 0 0 12 10.876a16.2 16.2 0 0 0 2.91-4.876L5 6V4h6V2z" />
    </Svg>
  )
})
Icon.displayName = 'EmphasisCn'
/**
 * Remix Icon: Emphasis Cn
 * @see {@link https://remixicon.com/icon/emphasis-cn Remix Icon Docs}
 */
export const EmphasisCn = Icon
