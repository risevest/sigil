import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EditLine = /* @__PURE__ */ memo(function EditLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.414 15.89 16.556 5.748l-1.414-1.414L5 14.476v1.414zm.829 2H3v-4.243L14.435 2.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414zM3 19.89h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Edit Line
 * @see {@link https://remixicon.com/icon/edit-line Remix Icon Docs}
 */
export { EditLine }
