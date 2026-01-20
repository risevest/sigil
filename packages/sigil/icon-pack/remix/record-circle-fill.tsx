import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RecordCircleFill = /* @__PURE__ */ memo(function RecordCircleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Record Circle Fill
 * @see {@link https://remixicon.com/icon/record-circle-fill Remix Icon Docs}
 */
export { RecordCircleFill }
