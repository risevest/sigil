import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Home3Line = /* @__PURE__ */ memo(function Home3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454-6 5.454zm2-4h8v2H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home 3 Line
 * @see {@link https://remixicon.com/icon/home-3-line Remix Icon Docs}
 */
export { Home3Line }
