import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19.116 20c0-1.064 0-2.04-.162-4.119-.2-2.09-1.289-3.148-3.15-3.52 2.205-.286 3.837-2.004 3.837-4.637C19.64 4.204 17.32 2 12.656 2H4v3.669h7.797c2.061 0 3.092.884 3.092 2.344 0 1.66-1.03 2.287-3.092 2.287H4v3.75h7.568c1.632 0 2.52.457 2.662 2.518a25 25 0 0 1 .082 2.773v.003c-.004.214-.008.425-.008.656zM4 17.205V20h6.122v-1.79c0-.375-.184-1.005-1.034-1.005z" />
    </Svg>
  )
})
Icon.displayName = 'RemixRunFill'
/**
 * Remix Icon: Remix Run Fill
 * @see {@link https://remixicon.com/icon/remix-run-fill Remix Icon Docs}
 */
export const RemixRunFill = Icon
