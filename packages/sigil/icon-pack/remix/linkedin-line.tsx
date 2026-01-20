import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LinkedinLine = /* @__PURE__ */ memo(function LinkedinLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Linkedin Line
 * @see {@link https://remixicon.com/icon/linkedin-line Remix Icon Docs}
 */
export { LinkedinLine }
