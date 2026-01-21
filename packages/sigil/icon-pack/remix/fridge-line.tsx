import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FridgeLine = /* @__PURE__ */ memo(function FridgeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.998 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 11h-12v9h12zm-8 2v4h-2v-4zm8-11h-12v7h12zm-8 2v3h-2V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Fridge Line
 * @see {@link https://remixicon.com/icon/fridge-line Remix Icon Docs}
 */
export { FridgeLine }
