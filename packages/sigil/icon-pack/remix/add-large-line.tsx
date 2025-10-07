import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z" />
    </Svg>
  )
})
Icon.displayName = 'AddLargeLine'
/**
 * Remix Icon: Add Large Line
 * @see {@link https://remixicon.com/icon/add-large-line Remix Icon Docs}
 */
export const AddLargeLine = Icon
