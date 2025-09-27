import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 2.76 10 3.236-.9 9.468-9.1 6.86-9.1-6.864L2.01 6zm0 .825L3.19 6.435 12 20.793l8.806-14.358z" />
    </Svg>
  )
})
Icon.displayName = 'OpenbaseFill'
/**
 * Remix Icon: Openbase Fill
 * @see {@link https://remixicon.com/icon/openbase-fill Remix Icon Docs}
 */
export const OpenbaseFill = Icon
