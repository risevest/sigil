import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm11.95-7.703a1 1 0 0 0-1.415 0L13 13.833V4a1 1 0 0 0-2 0v9.833l-2.536-2.536a1 1 0 0 0-1.414 1.415l4.243 4.242a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0 0-1.415Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ArrowToDownLine'

/**
 * MingCute Icon: Arrow To Down Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowToDownLine = memo(Icon)
