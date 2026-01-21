import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Layout9Line = /* @__PURE__ */ memo(function Layout9Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 2h-6v14h6zm-8 11H5v3h6zm0-6H5v4h6zm0-5H5v3h6z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Layout 9 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Layout9Line }
