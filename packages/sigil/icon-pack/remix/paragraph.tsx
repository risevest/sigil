import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Paragraph = /* @__PURE__ */ memo(function Paragraph(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6zm-2 0a4 4 0 1 0 0 8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Paragraph
 * @see {@link https://remixicon.com/icon/paragraph Remix Icon Docs}
 */
export { Paragraph }
