import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m17.27 13.515.952.66c1.154.811 2.36 1.736 3.3 2.938a1.47 1.47 0 0 1 .188 1.485 5.87 5.87 0 0 1-3.72 3.314l-.326.087c-.32.08-.7.149-1.112.133l-.217-.01-.386-.034-.144-.016-.31-.042-.338-.056-.366-.073a12.258 12.258 0 0 1-.192-.043l-.402-.1c-1.588-.423-3.683-1.306-5.917-3.134l3.597-3.596c.34.242.676.462.985.652l.438.261a.483.483 0 0 0 .644-.16l1.27-1.934a1.503 1.503 0 0 1 2.056-.332M5.412 2.285a1.47 1.47 0 0 1 1.445.16c1.11.809 1.98 1.905 2.727 2.963l.433.628.492.726c.4.584.337 1.369-.146 1.88l-.11.106-1.951 1.449a.48.48 0 0 0-.142.615 15.02 15.02 0 0 0 1.047 1.627l.19.25 6.614-6.614a1 1 0 0 1 1.497 1.32l-.083.095L3.99 20.925a1 1 0 0 1-1.498-1.32l.084-.095 3.255-3.255c-1.96-2.23-2.959-4.353-3.463-6.011l-.116-.405-.051-.195-.089-.373-.071-.351-.057-.327-.044-.302-.032-.276-.022-.249-.014-.22a3.734 3.734 0 0 1 .083-1.011l.062-.262a5.893 5.893 0 0 1 3.395-3.987Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PhoneOffFill'

/**
 * MingCute Icon: Phone Off Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PhoneOffFill = memo(Icon)
