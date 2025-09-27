import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.866 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0M11 16v2h2v-2zm0-7v5h2V9z" />
    </Svg>
  )
})
Icon.displayName = 'AlertFill'
/**
 * Remix Icon: Alert Fill
 * @see {@link https://remixicon.com/icon/alert-fill Remix Icon Docs}
 */
export const AlertFill = Icon
