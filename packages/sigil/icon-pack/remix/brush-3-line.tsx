import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 19.997v-5h2v5h9v-7H5v7zm-4-9h16v-3h-6v-4h-4v4H4zm-1 10v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" />
    </Svg>
  )
})
Icon.displayName = 'Brush3Line'
/**
 * Remix Icon: Brush 3 Line
 * @see {@link https://remixicon.com/icon/brush-3-line Remix Icon Docs}
 */
export const Brush3Line = Icon
