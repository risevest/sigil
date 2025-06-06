import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M21 18a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 5c3.224 0 5.942 1.075 7.868 2.589C21.759 9.075 23 11.085 23 13c0 .842-.258 1.56-.713 2.14-.443.566-1.034.95-1.636 1.214-1.186.518-2.597.646-3.651.646H2.994A1.995 1.995 0 0 1 1 15V7c0-1.101.89-2 1.998-2zM7 7H3v3h4zm5 0H9v3h4V7.04a11.86 11.86 0 0 0-.662-.035zm3 .383V10h4.551a8.216 8.216 0 0 0-.919-.839c-.962-.756-2.19-1.395-3.632-1.778"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TrainFill'

/**
 * MingCute Icon: Train Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TrainFill = memo(Icon)
