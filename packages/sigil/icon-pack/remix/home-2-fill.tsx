import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Home2Fill = /* @__PURE__ */ memo(function Home2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home 2 Fill
 * @see {@link https://remixicon.com/icon/home-2-fill Remix Icon Docs}
 */
export { Home2Fill }
