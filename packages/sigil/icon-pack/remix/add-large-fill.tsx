import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" />
    </Svg>
  )
})
Icon.displayName = 'AddLargeFill'
/**
 * Remix Icon: Add Large Fill
 * @see {@link https://remixicon.com/icon/add-large-fill Remix Icon Docs}
 */
export const AddLargeFill = Icon
