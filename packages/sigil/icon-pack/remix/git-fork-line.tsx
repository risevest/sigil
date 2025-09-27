import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m15-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
Icon.displayName = 'GitForkLine'
/**
 * Remix Icon: Git Fork Line
 * @see {@link https://remixicon.com/icon/git-fork-line Remix Icon Docs}
 */
export const GitForkLine = Icon
