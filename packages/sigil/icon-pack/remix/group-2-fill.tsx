import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 19.748V16.4c0-1.283.995-2.292 2.467-2.868A8.5 8.5 0 0 0 9.5 13c-1.89 0-3.636.617-5.047 1.66A8.02 8.02 0 0 0 10 19.748m8.88-3.662C18.485 15.553 17.17 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a8 8 0 0 0 6.88-3.914M9.55 11.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m5.95 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
    </Svg>
  )
})
Icon.displayName = 'Group2Fill'
/**
 * Remix Icon: Group 2 Fill
 * @see {@link https://remixicon.com/icon/group-2-fill Remix Icon Docs}
 */
export const Group2Fill = Icon
