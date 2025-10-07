import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 .7 10.747 7.808-4.105 12.634H5.358L1.253 8.508z" />
    </Svg>
  )
})
Icon.displayName = 'PentagonFill'
/**
 * Remix Icon: Pentagon Fill
 * @see {@link https://remixicon.com/icon/pentagon-fill Remix Icon Docs}
 */
export const PentagonFill = Icon
