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
          d="M16 7a1 1 0 0 1 .993.883L17 8v9.621l1.828-1.828a1 1 0 0 1 1.498 1.32l-.084.094-3.535 3.536a1 1 0 0 1-1.32.083l-.094-.083-3.536-3.536a1 1 0 0 1 1.32-1.497l.095.083L15 17.62V8a1 1 0 0 1 1-1ZM8.707 3.257l3.535 3.536a1 1 0 1 1-1.414 1.414L9 6.379v9.62a1 1 0 1 1-2 0V6.38L5.17 8.207a1 1 0 0 1-1.414-1.414l3.536-3.536a1 1 0 0 1 1.414 0Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Transfer4Line'

/**
 * MingCute Icon: Transfer 4 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Transfer4Line = memo(Icon)
