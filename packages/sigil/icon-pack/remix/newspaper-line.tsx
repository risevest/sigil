import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 20V4H4v15a1 1 0 0 0 1 1zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM6 6h6v6H6zm2 2v2h2V8zm-2 5h8v2H6zm0 3h8v2H6z" />
    </Svg>
  )
})
Icon.displayName = 'NewspaperLine'
/**
 * Remix Icon: Newspaper Line
 * @see {@link https://remixicon.com/icon/newspaper-line Remix Icon Docs}
 */
export const NewspaperLine = Icon
