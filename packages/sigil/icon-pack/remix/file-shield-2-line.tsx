import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 12 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z" />
    </Svg>
  )
})
Icon.displayName = 'FileShield2Line'
/**
 * Remix Icon: File Shield 2 Line
 * @see {@link https://remixicon.com/icon/file-shield-2-line Remix Icon Docs}
 */
export const FileShield2Line = Icon
