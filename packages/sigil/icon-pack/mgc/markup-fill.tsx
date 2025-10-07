import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.817 12h-3.634a2 2 0 0 0-1.87 1.293l-.053.158-.88 3.08A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.356-1.289l.264-.18-.88-3.08a2 2 0 0 0-1.757-1.444zm-2.281-6.84-1.393 3.482a2 2 0 0 0-.143.743v.515a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1v-.515c0-.254-.049-.506-.143-.743l-1.393-3.481a.5.5 0 0 0-.928 0Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'MarkupFill'
/**
 * MingCute Icon: Markup Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MarkupFill = Icon
