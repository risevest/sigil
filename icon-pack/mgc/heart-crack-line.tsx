import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M21.998 10.393c.065-2.892-1.409-5.37-3.504-6.592-1.96-1.141-4.422-1.148-6.494.538-2.072-1.686-4.534-1.68-6.494-.538-2.095 1.221-3.569 3.7-3.504 6.592.081 3.61 2.89 6.794 7.679 9.638.694.412 1.474.97 2.319.97.861 0 1.61-.548 2.32-.97 4.787-2.844 7.597-6.029 7.678-9.638m-9.155-4.121c1.508-1.526 3.25-1.554 4.644-.742 1.444.841 2.56 2.628 2.511 4.818-.056 2.512-2.04 5.195-6.7 7.964-.408.242-.834.553-1.298.682-.464-.129-.89-.44-1.298-.682-4.66-2.77-6.644-5.452-6.7-7.964-.05-2.19 1.067-3.977 2.511-4.818 1.227-.715 2.723-.778 4.092.256L9.247 7.342a1 1 0 0 0 .046 1.365l2.42 2.42-1.545 2.318a1 1 0 1 0 1.664 1.11l2-3a1 1 0 0 0-.125-1.262l-2.339-2.34 1.385-1.585c.03-.033.059-.065.09-.096"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HeartCrackLine'

/**
 * MingCute Icon: Heart Crack Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HeartCrackLine = memo(Icon)
