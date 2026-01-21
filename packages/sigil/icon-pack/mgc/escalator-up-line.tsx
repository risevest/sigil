import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EscalatorUpLine = /* @__PURE__ */ memo(function EscalatorUpLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M2 16.172a3 3 0 0 0 3 3h3.039a3 3 0 0 0 2.342-1.126l7.1-8.874H19a3 3 0 1 0 0-6h-3.039a3 3 0 0 0-2.342 1.126l-7.1 8.874H5a3 3 0 0 0-3 3m18-10a1 1 0 0 1-1 1h-2a1 1 0 0 0-.78.375l-7.4 9.25a1 1 0 0 1-.781.375H5a1 1 0 1 1 0-2h1.76a1.5 1.5 0 0 0 1.171-.563l7.25-9.062a1 1 0 0 1 .78-.375H19a1 1 0 0 1 1 1M6 10.828a1 1 0 0 0 1-1V6.586L7.414 7a1 1 0 0 0 1.414-1.414l-2.12-2.121a1 1 0 0 0-1.415 0l-2.121 2.12A1 1 0 0 0 4.586 7L5 6.586v3.242a1 1 0 0 0 1 1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Escalator Up Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { EscalatorUpLine }
