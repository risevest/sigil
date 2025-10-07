import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M11.298 2.195a2 2 0 0 1 1.232-.056l.172.056 7 2.625a2 2 0 0 1 1.291 1.707l.007.166v5.363a9 9 0 0 1-4.709 7.91l-.266.14-3.354 1.676a1.5 1.5 0 0 1-1.198.063l-.144-.062-3.354-1.678a9 9 0 0 1-4.97-7.75l-.005-.3V6.694a2 2 0 0 1 1.145-1.808l.153-.065zm-.155 5.957L9.152 11.47a1.01 1.01 0 0 0 .866 1.53h2.216l-1.091 1.819a1 1 0 0 0 1.714 1.029l1.991-3.318a1.01 1.01 0 0 0-.866-1.53h-2.216l1.092-1.819a1 1 0 0 0-1.716-1.029Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'SafeFlashFill'
/**
 * MingCute Icon: Safe Flash Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SafeFlashFill = Icon
