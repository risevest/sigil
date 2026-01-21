import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitRepositoryPrivateLine = /* @__PURE__ */ memo(function GitRepositoryPrivateLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 10v10h13V10zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-9 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Repository Private Line
 * @see {@link https://remixicon.com/icon/git-repository-private-line Remix Icon Docs}
 */
export { GitRepositoryPrivateLine }
