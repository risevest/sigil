import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileCloseLine = /* @__PURE__ */ memo(function FileCloseLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22v-2H5V4h10v4h4v5h2V7l-5-5H3.999A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992zm9.536-.879L19.414 19l2.122-2.121-1.415-1.415-2.12 2.122-2.122-2.122-1.414 1.415 2.12 2.12-2.12 2.122 1.414 1.414L18 20.415l2.121 2.12z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Close Line
 * @see {@link https://remixicon.com/icon/file-close-line Remix Icon Docs}
 */
export { FileCloseLine }
