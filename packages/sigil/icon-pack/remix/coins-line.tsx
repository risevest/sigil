import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CoinsLine = /* @__PURE__ */ memo(function CoinsLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.005 2.003a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.711 6.71a8 8 0 0 1 7.294-4.707m-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m1 1v1h2v2h-4a.5.5 0 0 0-.09.992l.09.008h2a2.5 2.5 0 0 1 0 5v1h-2v-1h-2v-2h4a.5.5 0 0 0 .09-.992l-.09-.008h-2a2.5 2.5 0 0 1 0-5v-1zm3-5A5.99 5.99 0 0 0 9.52 6.016a8 8 0 0 1 8.47 8.471 6 6 0 0 0-3.986-10.484" />
    </Svg>
  )
})
/**
 * Remix Icon: Coins Line
 * @see {@link https://remixicon.com/icon/coins-line Remix Icon Docs}
 */
export { CoinsLine }
