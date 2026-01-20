import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareLine = /* @__PURE__ */ memo(function ShareLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.12 17.023-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Line
 * @see {@link https://remixicon.com/icon/share-line Remix Icon Docs}
 */
export { ShareLine }
