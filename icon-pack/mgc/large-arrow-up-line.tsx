import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M17.586 10 12 4.413 6.414 10H9c.545 0 1 .455 1 1v9h4v-9a1 1 0 0 1 1-1h2.586Zm1.926-.902c1.071 1.07.313 2.902-1.202 2.902H16v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8H5.69c-1.515 0-2.273-1.831-1.202-2.902l6.451-6.453a1.5 1.5 0 0 1 2.121 0l6.452 6.453Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LargeArrowUpLine'

/**
 * MingCute Icon: Large Arrow Up Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LargeArrowUpLine = memo(Icon)
