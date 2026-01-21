import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CreativeCommonsByFill = /* @__PURE__ */ memo(function CreativeCommonsByFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2 8h-4a1 1 0 0 0-1 1v4h1.5v4h3v-4H15v-4a1 1 0 0 0-1-1m-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </Svg>
  )
})
/**
 * Remix Icon: Creative Commons By Fill
 * @see {@link https://remixicon.com/icon/creative-commons-by-fill Remix Icon Docs}
 */
export { CreativeCommonsByFill }
