import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M7.269 3.11c.974-.974 2.617-.34 2.725.991l.006.14V20a1.5 1.5 0 0 1-2.993.144L7 20V7.621l-1.44 1.44a1.5 1.5 0 0 1-2.224-2.008l.103-.114L7.27 3.11ZM15.5 2.5a1.5 1.5 0 0 1 1.493 1.356L17 4v12.379l1.44-1.44a1.5 1.5 0 0 1 2.224 2.008l-.103.114-3.83 3.829c-.974.974-2.617.34-2.725-.991l-.006-.14V4a1.5 1.5 0 0 1 1.5-1.5Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Transfer2Fill'

/**
 * MingCute Icon: Transfer 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Transfer2Fill = memo(Icon)
