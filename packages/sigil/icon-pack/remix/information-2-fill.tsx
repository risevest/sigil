import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m2 5.5h-1v-4.5h-3v2h1V15h-1v2h4z" />
    </Svg>
  )
})
Icon.displayName = 'Information2Fill'
/**
 * Remix Icon: Information 2 Fill
 * @see {@link https://remixicon.com/icon/information-2-fill Remix Icon Docs}
 */
export const Information2Fill = Icon
