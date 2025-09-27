import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 10.086 7.207 5.293 5.793 6.707 12 12.914l6.207-6.207-1.414-1.414zM18 17H6v-2h12z" />
    </Svg>
  )
})
Icon.displayName = 'SkipDownLine'
/**
 * Remix Icon: Skip Down Line
 * @see {@link https://remixicon.com/icon/skip-down-line Remix Icon Docs}
 */
export const SkipDownLine = Icon
