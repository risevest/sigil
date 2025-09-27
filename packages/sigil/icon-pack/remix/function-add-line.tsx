import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm10 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm1 6v-4h4v4zM5 9V5h4v4zm0 10v-4h4v4zm11-8V8h-3V6h3V3h2v3h3v2h-3v3z" />
    </Svg>
  )
})
Icon.displayName = 'FunctionAddLine'
/**
 * Remix Icon: Function Add Line
 * @see {@link https://remixicon.com/icon/function-add-line Remix Icon Docs}
 */
export const FunctionAddLine = Icon
