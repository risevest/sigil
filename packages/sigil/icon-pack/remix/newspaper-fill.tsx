import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM5 6v6h6V6zm0 7v2h10v-2zm0 3v2h10v-2zm2-8h2v2H7z" />
    </Svg>
  )
})
Icon.displayName = 'NewspaperFill'
/**
 * Remix Icon: Newspaper Fill
 * @see {@link https://remixicon.com/icon/newspaper-fill Remix Icon Docs}
 */
export const NewspaperFill = Icon
