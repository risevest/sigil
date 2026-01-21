import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FacebookLine = /* @__PURE__ */ memo(function FacebookLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2q.784 0 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298-.303.162-.529.388-.691.692-.22.411-.298.814-.298 2.138z" />
    </Svg>
  )
})
/**
 * Remix Icon: Facebook Line
 * @see {@link https://remixicon.com/icon/facebook-line Remix Icon Docs}
 */
export { FacebookLine }
