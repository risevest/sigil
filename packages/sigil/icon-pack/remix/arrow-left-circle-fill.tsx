import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftCircleFill = /* @__PURE__ */ memo(function ArrowLeftCircleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 9V8l-4 4 4 4v-3h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Circle Fill
 * @see {@link https://remixicon.com/icon/arrow-left-circle-fill Remix Icon Docs}
 */
export { ArrowLeftCircleFill }
