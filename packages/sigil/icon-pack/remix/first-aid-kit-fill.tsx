import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 1a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V2a1 1 0 0 1 1-1zm-3 8h-2v3H8v2h2.999L11 17h2l-.001-3H16v-2h-3zm2-6H9v2h6z" />
    </Svg>
  )
})
Icon.displayName = 'FirstAidKitFill'
/**
 * Remix Icon: First Aid Kit Fill
 * @see {@link https://remixicon.com/icon/first-aid-kit-fill Remix Icon Docs}
 */
export const FirstAidKitFill = Icon
