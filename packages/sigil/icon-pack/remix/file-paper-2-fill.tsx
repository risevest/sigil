import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FilePaper2Fill = /* @__PURE__ */ memo(function FilePaper2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19v-4H3V5a3 3 0 0 1 3-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Paper 2 Fill
 * @see {@link https://remixicon.com/icon/file-paper-2-fill Remix Icon Docs}
 */
export { FilePaper2Fill }
