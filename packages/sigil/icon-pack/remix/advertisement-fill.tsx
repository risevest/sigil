import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AdvertisementFill = /* @__PURE__ */ memo(function AdvertisementFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m7.552 13 .847-2.115L9.244 13zM16 12h1v2h-1a1 1 0 1 1 0-2m5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-8.402 13h-2.155l-.4-1h-3.29l-.4 1H4.199l1.199-2.998.001-.002 2-5h2zM17 8h2v8h-3a3 3 0 1 1 0-6h1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Advertisement Fill
 * @see {@link https://remixicon.com/icon/advertisement-fill Remix Icon Docs}
 */
export { AdvertisementFill }
