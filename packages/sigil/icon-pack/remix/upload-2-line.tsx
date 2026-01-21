import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Upload2Line = /* @__PURE__ */ memo(function Upload2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zm9-10v7h-2V9H6l6-6 6 6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Upload 2 Line
 * @see {@link https://remixicon.com/icon/upload-2-line Remix Icon Docs}
 */
export { Upload2Line }
