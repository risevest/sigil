import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Home5Fill = /* @__PURE__ */ memo(function Home5Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-10-7v6h2v-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home 5 Fill
 * @see {@link https://remixicon.com/icon/home-5-fill Remix Icon Docs}
 */
export { Home5Fill }
