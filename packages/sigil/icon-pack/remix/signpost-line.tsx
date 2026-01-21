import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SignpostLine = /* @__PURE__ */ memo(function SignpostLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8 3-3-3-3H5v6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Signpost Line
 * @see {@link https://remixicon.com/icon/signpost-line Remix Icon Docs}
 */
export { SignpostLine }
