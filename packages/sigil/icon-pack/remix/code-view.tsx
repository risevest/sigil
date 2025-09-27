import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.95 8.464 1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95z" />
    </Svg>
  )
})
Icon.displayName = 'CodeView'
/**
 * Remix Icon: Code View
 * @see {@link https://remixicon.com/icon/code-view Remix Icon Docs}
 */
export const CodeView = Icon
