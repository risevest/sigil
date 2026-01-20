import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DossierLine = /* @__PURE__ */ memo(function DossierLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zM7 6H5v14h14V6h-2v2H7zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v2h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Dossier Line
 * @see {@link https://remixicon.com/icon/dossier-line Remix Icon Docs}
 */
export { DossierLine }
