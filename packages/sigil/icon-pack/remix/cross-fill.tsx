import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
    </Svg>
  )
})
Icon.displayName = 'CrossFill'
/**
 * Remix Icon: Cross Fill
 * @see {@link https://remixicon.com/icon/cross-fill Remix Icon Docs}
 */
export const CrossFill = Icon
