import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GitRepositoryLine = /* @__PURE__ */ memo(function GitRepositoryLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035Q6.245 14 6.5 14zM7 5h2v2H7zm0 3h2v2H7zm0 3h2v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Git Repository Line
 * @see {@link https://remixicon.com/icon/git-repository-line Remix Icon Docs}
 */
export { GitRepositoryLine }
