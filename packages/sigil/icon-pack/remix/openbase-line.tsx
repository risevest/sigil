import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const OpenbaseLine = /* @__PURE__ */ memo(function OpenbaseLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3 2 5.996l1 9.464 9 7.04 9-7.04 1-9.464zm7.837 4.436L12 19.96 4.163 7.436 12 5.088z" />
    </Svg>
  )
})
/**
 * Remix Icon: Openbase Line
 * @see {@link https://remixicon.com/icon/openbase-line Remix Icon Docs}
 */
export { OpenbaseLine }
