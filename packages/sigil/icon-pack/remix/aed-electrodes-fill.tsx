import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2h2v-2h5a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm9 12V8a1 1 0 0 0-1-1H9V5h10v10z" />
    </Svg>
  )
})
Icon.displayName = 'AedElectrodesFill'
/**
 * Remix Icon: Aed Electrodes Fill
 * @see {@link https://remixicon.com/icon/aed-electrodes-fill Remix Icon Docs}
 */
export const AedElectrodesFill = Icon
