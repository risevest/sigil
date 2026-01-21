import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DatabaseLine = /* @__PURE__ */ memo(function DatabaseLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 19V9H4v10zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm2-2v14h7V5zM5 16h5v2H5zm9 0h5v2h-5zm0-3h5v2h-5zm0-3h5v2h-5zm-9 3h5v2H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Database Line
 * @see {@link https://remixicon.com/icon/database-line Remix Icon Docs}
 */
export { DatabaseLine }
