import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CodeBoxFill = /* @__PURE__ */ memo(function CodeBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13.465 12.536L20 12l-3.535-3.536L15.05 9.88 17.172 12l-2.122 2.121zM6.828 12 8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12zm4.416 5 3.64-10h-2.128l-3.64 10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Code Box Fill
 * @see {@link https://remixicon.com/icon/code-box-fill Remix Icon Docs}
 */
export { CodeBoxFill }
