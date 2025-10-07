import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.917 13A6.002 6.002 0 0 1 1 12a6 6 0 0 1 11.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4zM7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    </Svg>
  )
})
Icon.displayName = 'KeyLine'
/**
 * Remix Icon: Key Line
 * @see {@link https://remixicon.com/icon/key-line Remix Icon Docs}
 */
export const KeyLine = Icon
