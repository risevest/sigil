import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Emotion2Fill = /* @__PURE__ */ memo(function Emotion2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-4-9a4 4 0 0 0 8 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Emotion 2 Fill
 * @see {@link https://remixicon.com/icon/emotion-2-fill Remix Icon Docs}
 */
export { Emotion2Fill }
