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
          d="M19 4a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7a3 3 0 0 1 2.824-2.995L5 4zm0 2H5a1 1 0 0 0-.993.883L4 7v10a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17V7a1 1 0 0 0-1-1M9.22 8a2 2 0 0 1 1.894 1.36l.045.155 1.311 5.243a1 1 0 0 1-1.905.596l-.035-.111L10.22 14H7.78l-.31 1.242a1 1 0 0 1-1.962-.37l.022-.114 1.31-5.243a2 2 0 0 1 1.78-1.509L8.78 8zM18 8a1 1 0 0 1 .993.883L19 9v6a1 1 0 0 1-.883.993L18 16h-2a3 3 0 1 1 .81-5.89l.19.06V9a1 1 0 0 1 1-1m-2 4a1 1 0 0 0-.117 1.993L16 14h1v-1a1 1 0 0 0-1-1m-6.78-2h-.44l-.5 2h1.44z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AdRectangleLine'

/**
 * MingCute Icon: Ad Rectangle Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AdRectangleLine = memo(Icon)
