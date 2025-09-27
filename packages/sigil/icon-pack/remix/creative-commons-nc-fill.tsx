import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.256 5.672 3.58 3.577A2.5 2.5 0 0 0 10 13h3.999l.09.008A.5.5 0 0 1 14 14H8.5v2H11v2h2v-2h1q.273-.001.53-.056l3.798 3.8A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328M12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577A2.5 2.5 0 0 0 14 11h-4l-.09-.01A.5.5 0 0 1 10 10h5.5V8H13V6h-2v2h-1q-.272.001-.529.056l-3.799-3.8A9.96 9.96 0 0 1 12 2" />
    </Svg>
  )
})
Icon.displayName = 'CreativeCommonsNcFill'
/**
 * Remix Icon: Creative Commons Nc Fill
 * @see {@link https://remixicon.com/icon/creative-commons-nc-fill Remix Icon Docs}
 */
export const CreativeCommonsNcFill = Icon
