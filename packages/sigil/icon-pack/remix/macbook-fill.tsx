import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4.007C2 3.45 2.455 3 2.992 3h18.016c.548 0 .992.45.992 1.007V17H2zM1 19h22v2H1z" />
    </Svg>
  )
})
Icon.displayName = 'MacbookFill'
/**
 * Remix Icon: Macbook Fill
 * @see {@link https://remixicon.com/icon/macbook-fill Remix Icon Docs}
 */
export const MacbookFill = Icon
