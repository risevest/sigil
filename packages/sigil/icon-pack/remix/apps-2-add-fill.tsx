import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m3.5-6V8h-3V6h3V3h2v3h3v2h-3v3z" />
    </Svg>
  )
})
Icon.displayName = 'Apps2AddFill'
/**
 * Remix Icon: Apps 2 Add Fill
 * @see {@link https://remixicon.com/icon/apps-2-add-fill Remix Icon Docs}
 */
export const Apps2AddFill = Icon
