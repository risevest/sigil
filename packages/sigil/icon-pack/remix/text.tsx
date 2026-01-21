import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Text = /* @__PURE__ */ memo(function Text(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 6v15h-2V6H5V4h14v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Text
 * @see {@link https://remixicon.com/icon/text Remix Icon Docs}
 */
export { Text }
