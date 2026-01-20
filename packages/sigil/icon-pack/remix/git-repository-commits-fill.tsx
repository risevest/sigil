import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitRepositoryCommitsFill = /* @__PURE__ */ memo(function GitRepositoryCommitsFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 17v6h-2v-6H9l4-5 4 5zm2 2h3v-3h-.8L13 9.5 7.647 16H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4zM7 5v2h2V5zm0 3v2h2V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Repository Commits Fill
 * @see {@link https://remixicon.com/icon/git-repository-commits-fill Remix Icon Docs}
 */
export { GitRepositoryCommitsFill }
