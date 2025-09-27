import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 4h-10v10h5V9.5h2.5V17h2.5z" />
    </Svg>
  )
})
Icon.displayName = 'NpmjsFill'
/**
 * Remix Icon: Npmjs Fill
 * @see {@link https://remixicon.com/icon/npmjs-fill Remix Icon Docs}
 */
export const NpmjsFill = Icon
