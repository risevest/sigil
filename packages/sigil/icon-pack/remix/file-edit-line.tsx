import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21 6.757-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992zm.778 2.05 1.414 1.415L15.414 18l-1.416-.002.002-1.412z" />
    </Svg>
  )
})
Icon.displayName = 'FileEditLine'
/**
 * Remix Icon: File Edit Line
 * @see {@link https://remixicon.com/icon/file-edit-line Remix Icon Docs}
 */
export const FileEditLine = Icon
