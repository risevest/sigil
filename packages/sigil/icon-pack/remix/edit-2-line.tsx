import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 18.89h1.414l9.314-9.314-1.414-1.414L5 17.476zm16 2H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 18.89H21zM15.728 6.748l1.414 1.414 1.414-1.414-1.414-1.414z" />
    </Svg>
  )
})
Icon.displayName = 'Edit2Line'
/**
 * Remix Icon: Edit 2 Line
 * @see {@link https://remixicon.com/icon/edit-2-line Remix Icon Docs}
 */
export const Edit2Line = Icon
