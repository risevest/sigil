import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LinearFill = /* @__PURE__ */ memo(function LinearFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142a1 1 0 0 1-1.414 0L4.929 6.343a1 1 0 0 1 0-1.414m-1.76 2.483a1 1 0 0 1 1.415 0l12.004 12.004a1 1 0 1 1-1.415 1.414L3.17 8.827a1 1 0 0 1 0-1.415Zm-.862 3.38a1 1 0 0 1 1.414 0l9.487 9.487a1 1 0 0 1-1.414 1.414l-9.487-9.487a1 1 0 0 1 0-1.414m.5 4.744a1 1 0 0 1 1.415 0l4.242 4.242a1 1 0 1 1-1.414 1.414L2.808 16.95a1 1 0 0 1 0-1.414Z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Linear Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { LinearFill }
