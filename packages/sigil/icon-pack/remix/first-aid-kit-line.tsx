import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 1a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V2a1 1 0 0 1 1-1zm4 6H4v12h16zm-7 2v3h3v2h-3.001L13 17h-2l-.001-3H8v-2h3V9zm2-6H9v2h6z" />
    </Svg>
  )
})
Icon.displayName = 'FirstAidKitLine'
/**
 * Remix Icon: First Aid Kit Line
 * @see {@link https://remixicon.com/icon/first-aid-kit-line Remix Icon Docs}
 */
export const FirstAidKitLine = Icon
