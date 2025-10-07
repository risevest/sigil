import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
    </Svg>
  )
})
Icon.displayName = 'Apps2Fill'
/**
 * Remix Icon: Apps 2 Fill
 * @see {@link https://remixicon.com/icon/apps-2-fill Remix Icon Docs}
 */
export const Apps2Fill = Icon
