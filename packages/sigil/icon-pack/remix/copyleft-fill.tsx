import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10m0-5c2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.82 0-3.413.973-4.288 2.428l1.715 1.028A3 3 0 1 1 12 15a3 3 0 0 1-2.574-1.457l-1.714 1.03A5 5 0 0 0 12 17" />
    </Svg>
  )
})
Icon.displayName = 'CopyleftFill'
/**
 * Remix Icon: Copyleft Fill
 * @see {@link https://remixicon.com/icon/copyleft-fill Remix Icon Docs}
 */
export const CopyleftFill = Icon
